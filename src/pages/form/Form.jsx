// React
import { useState } from 'react'
// Context
import { useMainContext } from '../../context/MainContext'
// Componentes
import {
  RedButton,
  BlueButton,
  RedButtonSpan,
  BlueButtonSpan,
  H4ClassName
} from '../../components/ClassColors'
import DeliveryDate from './DeliveryDate'
import DepartmentsForm from './DepartmentsForm'
import EmbroiderersForm from './EmbroiderersForm'
import Modal from '../../components/Modal'
import OfferDescription from './OfferDescription'
import OfferDetails from './OfferDetails'
import OfferFiles from './OfferFiles'
import PickingForm from './PickingForm'
import SalesPerson from './SalesPerson'
import { IconDeleteBin5Fill, IconArrowBackUp } from '../../components/Icons'
// Utils
import { handleDropdown, handleChange } from './HandleFunctions'
import moment from 'moment'

// Constants
import {
  departmentList,
  ghostUsers,
  initialOfferValues,
  today,
  usersRolesList
} from '../../components/Constants'
// Firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { updateOffer, saveOffer, Auth } from '../../firebase/Api'
// Others
import { toast } from 'sonner'
import { fetchOffers } from '../../components/FetchOffers'
import LastUpdate from './LastUpdate'

export default function Form() {
  const {
    department,
    selectedOffer,
    setAllOffers,
    setLastDocument,
    setLastUpdate,
    setLoading,
    setOffers,
    setShowOffer,
    userRole
  } = useMainContext()
  const [values, setValues] = useState(selectedOffer || initialOfferValues)
  const [showModal, setShowModal] = useState(false)
  const [user] = useAuthState(Auth)
  const currentTime = moment().format('HH:mm')

  // Save or Update Offer
  async function handleSubmit(e) {
    e.preventDefault()
    if (!selectedOffer) {
      const savedValues = {
        ...values,
        lastModificationDate: [
          ...values.lastModificationDate,
          `Creada - ${today} ${currentTime} - ${user.email}`
        ]
      }
      await saveOffer(savedValues)
        .then(() => {
          toast.success('Oferta Creada!')
          setShowOffer(false)
          fetchOffers({
            department,
            setAllOffers,
            setLastDocument,
            setLastUpdate,
            setLoading,
            setOffers
          })
        })
        .catch((error) => {
          toast.error('Error al crear la Oferta !', error)
        })
    } else {
      // Update Offer

      const updatedOffer = ghostUsers.includes(user.email)
        ? values
        : {
            ...values,
            lastModificationDate: [
              ...values.lastModificationDate,
              `Actualizada - ${today} ${currentTime} - ${user.email}`
            ]
          }

      await updateOffer(selectedOffer.id, updatedOffer).then(() => {
        toast.success('Offer updated!')

        setOffers((prevOffers) => {
          const index = prevOffers.findIndex((o) => o.id === selectedOffer.id)
          const newOffers = [...prevOffers]
          newOffers[index] = updatedOffer
          return newOffers
        })

        setShowOffer(false)
      })
    }
  }
  // Delete Offer
  const handleDelete = async () => {
    const deletedOffer = {
      ...values,
      lastModificationDate: [
        ...values.lastModificationDate,
        `Borrada - ${today} ${currentTime} - ${user.email}`
      ],
      status: 'deleted',
      deletedDate: today.split('/').reverse().join('-'),
      department: {
        picaje: false,
        stamping: false,
        embroideries: false,
        preparation: false,
        confection: false,
        warehouse: false
      }
    }
    await updateOffer(selectedOffer.id, deletedOffer).then(() => {
      toast.success('Oferta Eliminada !')
      setShowOffer(false)
      setOffers((prevOffers) => {
        const index = prevOffers.findIndex((o) => o.id === selectedOffer.id)
        const newOffers = [...prevOffers]
        newOffers.splice(index, 1)
        return newOffers
      })
    })
  }
  return (
    <div className="m-auto mb-40 mt-3 w-full max-w-3xl text-sm text-gray-200">
      <form>
        <div className="flex justify-between">
          <h4 className={H4ClassName}>Datos de la Oferta</h4>
          <div className="flex gap-2">
            {userRole === usersRolesList.admin &&
              departmentList.GestionNav.deletedOffers !== department &&
              departmentList.GestionNav.endOffers !== department && (
                <button
                  className={
                    values.client === '' ||
                    values.offerNumber === '' ||
                    values.deliveryDate === ''
                      ? 'rounded bg-gray-700 p-2'
                      : BlueButton
                  }
                  disabled={
                    values.client === '' ||
                    values.offerNumber === '' ||
                    values.deliveryDate === ''
                  }
                  onClick={handleSubmit}
                >
                  <span className={BlueButtonSpan}></span>
                  {selectedOffer ? 'Actualizar Oferta' : 'Crear Oferta'}
                </button>
              )}
            <button
              className={`flex gap-1 ${RedButton}`}
              onClick={() => setShowOffer(false)}
            >
              <span className={RedButtonSpan}></span>
              <IconArrowBackUp />
              Volver
            </button>
          </div>
        </div>

        <OfferDetails
          values={values}
          handleChange={handleChange}
          setValues={setValues}
        />
        <DeliveryDate
          values={values}
          handleChange={handleChange}
          setValues={setValues}
        />

        <SalesPerson
          handleDropdown={handleDropdown}
          values={values}
          setValues={setValues}
        />

        <OfferDescription
          values={values}
          handleChange={handleChange}
          setValues={setValues}
        />

        {userRole === usersRolesList.admin && (
          <>
            <DepartmentsForm values={values} setValues={setValues} />
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/3">
                <PickingForm values={values} setValues={setValues} />
              </div>
              <div className="w-full md:w-1/2">
                <EmbroiderersForm values={values} setValues={setValues} />
              </div>
            </div>
          </>
        )}
        <OfferFiles values={values} />
      </form>
      <div className="mt-3 flex justify-end gap-3">
        {userRole === usersRolesList.admin && (
          <>
            {departmentList.GestionNav.deletedOffers !== department &&
              departmentList.GestionNav.endOffers !== department && (
                <>
                  {selectedOffer && (
                    <button
                      onClick={() => setShowModal(true)}
                      className="text-red-900 transition-all hover:scale-150 hover:text-orange-900 "
                    >
                      <IconDeleteBin5Fill />
                    </button>
                  )}
                  <button
                    className={
                      values.client === '' ||
                      values.offerNumber === '' ||
                      values.deliveryDate === ''
                        ? 'rounded bg-gray-700 p-2'
                        : BlueButton
                    }
                    disabled={
                      values.client === '' ||
                      values.offerNumber === '' ||
                      values.deliveryDate === ''
                    }
                    onClick={handleSubmit}
                  >
                    <span className={BlueButtonSpan}></span>
                    {selectedOffer ? 'Actualizar Oferta' : 'Crear Oferta'}
                  </button>
                </>
              )}
          </>
        )}
        <button
          className={`flex gap-1 ${RedButton}`}
          onClick={() => setShowOffer(false)}
        >
          <span className={RedButtonSpan}></span>
          <IconArrowBackUp />
          Volver
        </button>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onConfirm={handleDelete}
        title="Eliminar Oferta"
        content="¿Está seguro que desea eliminar esta Oferta?"
      />

      {userRole === usersRolesList.admin && (
        <LastUpdate lastUpdate={values.lastModificationDate} />
      )}
    </div>
  )
}
