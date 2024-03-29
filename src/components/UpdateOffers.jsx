/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
// Context
import { useMainContext } from '../context/MainContext'
// Components
import { ClockHistoryIcon, TaksIcon, UpdateIcon } from '../components/Icons'
import {
  BlueButton,
  BlueButtonSpan,
  RedButton,
  RedButtonSpan
} from './ClassColors'
// Utils
import moment from 'moment'
// Custom Hooks
import { fetchOffers, nextPage } from './FetchOffers'
// Constants
import { departmentList, usersRolesList } from './Constants'
export default function UpdateOffers({ totalOffers }) {
  const {
    department,
    setOffers,
    setAllOffers,
    setLoading,
    lastUpdate,
    setLastUpdate,
    showOffer,
    userRole,
    setShowOffer,
    setSelectedOffer,
    lastDocument,
    setLastDocument
  } = useMainContext()
  if (!showOffer) {
    return (
      <div className="flex gap-1 text-gray-300">
        <div className="flex rounded border border-gray-600 ">
          <div className="flex gap-1 p-2">
            <TaksIcon />
            {totalOffers}
          </div>
          <div className="flex gap-2 p-2">
            <ClockHistoryIcon />
            {moment(lastUpdate, 'HH:mm').format('HH:mm')}
          </div>
        </div>
        {department !== departmentList.GestionNav.deletedOffers &&
        department !== departmentList.GestionNav.endOffers ? (
          <button
            onClick={() => {
              fetchOffers({
                department,
                setOffers,
                setLastUpdate,
                setLoading,
                setAllOffers,
                setLastDocument
              })
            }}
            className={BlueButton}
          >
            <span className={BlueButtonSpan}></span>
            <UpdateIcon />
            Actualizar
          </button>
        ) : (
          <button
            disabled={lastDocument === undefined}
            className={`flex gap-1 ${BlueButton}`}
            onClick={() => {
              nextPage({
                department,
                setOffers,
                setLastUpdate,
                setLoading,
                setAllOffers,
                lastDocument,
                setLastDocument
              })
            }}
          >
            <UpdateIcon />
            <span className={BlueButtonSpan}></span>
            {lastDocument ? 'Cargar más Ofertas' : 'No hay más Ofertas'}
          </button>
        )}
        {userRole === usersRolesList.admin &&
          department !== departmentList.GestionNav.endOffers &&
          department !== departmentList.GestionNav.deletedOffers && (
            <button
              onClick={() => {
                setShowOffer(true)
                setSelectedOffer(null)
              }}
              className={RedButton}
            >
              <span className={RedButtonSpan}></span>
              Nueva Oferta
            </button>
          )}
      </div>
    )
  }
}
