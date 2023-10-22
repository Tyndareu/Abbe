// Context
import { useMainContext } from '../../context/MainContext'
// Components
import { IconCheck } from '../../components/Icons'
import Dropdown from './Dropdown'
import DeliveryDate from './DeliveryDate'
import CompletedDate from './CompletedDate'
import {
  LegendDateEndColor,
  LegendOfferTypeColor
} from '../../components/ColorLegend'
// Constants
import {
  departmentList,
  offerTypeColor,
  offerTypeDepartment,
  pickingAssignments,
  embroiderers
} from '../../components/Constants'
import Form from '../form/Form'
import EndTask from './EndTask'
import DepartamentsRow from './DepartamentsRow'

export default function Table({ offers }) {
  const {
    department,
    departmentButton,
    selectedOffer,
    setSelectedOffer,
    setShowOffer,
    setUnassignedDepartment,
    showOffer,
    unassignedDepartment
  } = useMainContext()

  function OfferTypeColor(offerType) {
    switch (offerType) {
      case 'Exterior':
        return offerTypeColor.Exterior.color
      case 'Bordado':
        return offerTypeColor.Embroidery.color
      case 'Stock':
        return offerTypeColor.Stock.color
      default:
        return ''
    }
  }

  const handleOnClick = (offer) => {
    setSelectedOffer(offer)
    setShowOffer(true)
  }
  const handleOnClickUnassignedDepartment = (offer) => {
    setUnassignedDepartment(!unassignedDepartment)
  }
  if (showOffer) {
    return <Form offer={selectedOffer} />
  } else {
    return (
      <div className="z-20 overflow-x-auto font-light">
        {offers.length === 0 ? (
          <h2 className="mt-3 flex justify-center p-3 text-xl text-gray-200">
            No se han encontrado ofertas, modique los filtros
          </h2>
        ) : (
          <table className="mx-auto w-full table-auto border-collapse rounded-md text-gray-200">
            <thead>
              <tr className=" text-blue-400">
                <th className="p-1">Nº Oferta</th>
                <th className="p-1">Cliente</th>
                {department !== departmentList.GestionNav.endOffers &&
                  department !== departmentList.GestionNav.deletedOffers && (
                    <>
                      <th className="p-1">Fecha de Entrega</th>
                      <th className="p-1">Fija</th>
                    </>
                  )}

                {department === departmentList.Admin.picaje && (
                  <th className="p-1">Picker</th>
                )}
                {department === departmentList.Admin.embroideries && (
                  <th className="p-1">Bordadora</th>
                )}
                {department !== departmentList.Admin.home &&
                  department !== departmentList.GestionNav.endOffers &&
                  department !== departmentList.GestionNav.deletedOffers && (
                    <>
                      <th className="p-1">Detalle de la oferta</th>
                      <th className="p-1">Finalizar</th>
                    </>
                  )}
                {department === departmentList.Admin.home && (
                  <>
                    <th className="p-1">Fecha de Creación</th>
                    {/* <th className="p-1">Días P.</th> */}
                    <th className="p-1">Comercial</th>
                    <th className="p-1">
                      {departmentButton ? (
                        <button
                          onClick={handleOnClickUnassignedDepartment}
                          className={`rounded  p-1 text-gray-300 transition-all duration-300  ${
                            unassignedDepartment
                              ? 'bg-red-800 hover:bg-red-600'
                              : 'bg-blue-800 hover:bg-blue-600'
                          }`}
                        >
                          {unassignedDepartment
                            ? 'Sin Departamento'
                            : 'Departamento/s'}
                        </button>
                      ) : 'Departamento/s'}
                    </th>
                  </>
                )}
                {(department === departmentList.GestionNav.endOffers ||
                  department === departmentList.GestionNav.deletedOffers) && (
                  <>
                    <th className="p-1">Comercial</th>
                    <th className="p-1">Fecha de Entrega</th>
                  </>
                )}
                {department === departmentList.GestionNav.deletedOffers && (
                  <th className="p-1">Fecha Borrado</th>
                )}
                {department === departmentList.GestionNav.endOffers && (
                  <th className="p-1">Fecha Finalizado</th>
                )}
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr
                  key={offer.id}
                  className={
                    offerTypeDepartment.includes(department)
                      ? `cursor-pointer transition-colors duration-100 hover:bg-blue-500 ${OfferTypeColor(
                          offer.offerType
                        )}`
                      : 'cursor-pointer transition-colors duration-200 odd:bg-gray-800/40 hover:bg-blue-500'
                  }
                >
                  <td
                    onClick={() => handleOnClick(offer)}
                    className={`p-1 text-center `}
                  >
                    {offer.offerNumber}
                  </td>
                  <td onClick={() => handleOnClick(offer)} className="p-1">
                    {offer.client}
                  </td>
                  {department !== departmentList.GestionNav.endOffers &&
                    department !== departmentList.GestionNav.deletedOffers && (
                      <>
                        <td onClick={() => handleOnClick(offer)}>
                          <DeliveryDate offer={offer} department={department} />
                        </td>
                        <td
                          className="m-auto text-red-500/80"
                          onClick={() => handleOnClick(offer)}
                        >
                          {offer.fixedDeliveryDate && <IconCheck />}
                        </td>
                      </>
                    )}

                  {department === departmentList.Admin.picaje && (
                    <Dropdown
                      offer={offer}
                      options={Object.values(pickingAssignments)}
                      field="picker"
                    />
                  )}
                  {department === departmentList.Admin.embroideries && (
                    <Dropdown
                      offer={offer}
                      options={embroiderers}
                      field="embroidery"
                    />
                  )}
                  {department !== departmentList.Admin.home &&
                    department !== departmentList.GestionNav.endOffers &&
                    department !== departmentList.GestionNav.deletedOffers && (
                      <>
                        <td
                          onClick={() => handleOnClick(offer)}
                          className="p-1"
                        >
                          {offer.offerDetails}
                        </td>
                        <EndTask offer={offer} department={department} />
                      </>
                    )}
                  {department === departmentList.Admin.home && (
                    <>
                      <td
                        onClick={() => handleOnClick(offer)}
                        className="p-1 text-center"
                      >
                        {offer.offerDate}
                      </td>
                      {/*   <td
                        onClick={() => handleOnClick(offer)}
                        className="p-1 text-center"
                      >
                        {offer.preparationDays ? offer.preparationDays : 0}
                      </td> */}
                      <td
                        onClick={() => handleOnClick(offer)}
                        className="p-1 text-center"
                      >
                        {offer.salesPerson === ''
                          ? 'Sin Asignar'
                          : offer.salesPerson}
                      </td>
                      <DepartamentsRow
                        offer={offer}
                        onClick={() => handleOnClick(offer)}
                      />
                    </>
                  )}
                  {(department === departmentList.GestionNav.endOffers ||
                    department === departmentList.GestionNav.deletedOffers) && (
                    <>
                      <td
                        onClick={() => handleOnClick(offer)}
                        className="p-1 text-center"
                      >
                        {offer.salesPerson === ''
                          ? 'Sin Asignar'
                          : offer.salesPerson}
                      </td>
                      <td
                        onClick={() => handleOnClick(offer)}
                        className="p-1 text-center"
                      >
                        {offer.deliveryDate.split('-').reverse().join('/')}
                      </td>
                    </>
                  )}
                  {department === departmentList.GestionNav.endOffers && (
                    <td onClick={() => handleOnClick(offer)}>
                      <CompletedDate offer={offer} />
                    </td>
                  )}
                  {department === departmentList.GestionNav.deletedOffers && (
                    <td
                      onClick={() => handleOnClick(offer)}
                      className="p-1 text-center"
                    >
                      {offer.deletedDate?.split('-').reverse().join('/')}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="mb-80 mt-10">
          {department !== departmentList.GestionNav.endOffers &&
            department !== departmentList.GestionNav.deletedOffers && (
              <LegendDateEndColor />
            )}
          {offerTypeDepartment.includes(department) && <LegendOfferTypeColor />}
        </div>
      </div>
    )
  }
}
