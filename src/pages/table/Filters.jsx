import { SearchIcon } from '../../components/Icons'
import {
  departmentList,
  pickingAssignments,
  offerType,
  salesPeopleList
} from '../../components/Constants'
import { useMainContext } from '../../context/MainContext'
import { isInitialState } from '../../components/Functions'
import Dropdown from '../../components/Dropdown'
import { RedButton, GreyButton } from '../../components/ClassColors'
import newOfferPNG from '../../img/newOffer.png'

export default function Filters({ clearFilters }) {
  const {
    department,
    offerTypeFilter,
    picker,
    salesPerson,
    searchCustomerName,
    searchOfferNumber,
    setOfferTypeFilter,
    setPicker,
    setSalesPerson,
    setSearchCustomerName,
    setSearchOfferNumber,
    showOffer,
    unassignedDepartment,
    newOffer,
    setNewOffer
  } = useMainContext()
  const offerTypes = Object.values(offerType)
  const pickers = Object.values(pickingAssignments)
  const departmentTypeOffers = Object.values(departmentList.OfferTypes)
  const clearFiltersButtonEnable = isInitialState({
    searchOfferNumber,
    searchCustomerName,
    picker,
    offerTypeFilter,
    salesPerson,
    unassignedDepartment,
    newOffer
  })
  if (!showOffer) {
    return (
      <div className="flex flex-wrap gap-x-1 gap-y-3">
        <form className="w-44">
          <div className="relative">
            <SearchIcon />
            <input
              type="search"
              value={searchOfferNumber}
              placeholder="Número Oferta"
              className="w-full rounded border border-gray-600 bg-transparent py-2 pl-8 text-gray-300 placeholder:text-gray-400"
              onChange={(e) => setSearchOfferNumber(e.target.value)}
            />
          </div>
        </form>

        <form className="w-44">
          <div className="relative">
            <SearchIcon />
            <input
              type="search"
              value={searchCustomerName}
              placeholder="Nombre Cliente"
              className="w-full rounded border border-gray-600 bg-transparent py-2 pl-8 text-gray-300 placeholder:text-gray-400"
              onChange={(e) => setSearchCustomerName(e.target.value)}
            />
          </div>
        </form>

        {department === departmentList.Admin.home && (
          <img
            onClick={() => setNewOffer(!newOffer)}
            src={newOfferPNG}
            alt="Nuevas ofertas"
            className={`h-10 cursor-pointer ${newOffer ? null : 'grayscale'}`}
          />
        )}

        {department === departmentList.Admin.picaje && (
          <div>
            <div className="flex rounded border border-gray-600 p-1 text-gray-300">
              <nav className="flex gap-1">
                <button
                  className={
                    picker === 'Tod@s'
                      ? 'rounded bg-blue-500 p-1'
                      : 'rounded p-1 transition-colors duration-300 hover:bg-blue-500'
                  }
                  value={'Tod@s'}
                  type="button"
                  onClick={(e) => setPicker(e.target.value)}
                >
                  Tod@s
                </button>
                {pickers.slice(1).map((item) => (
                  <button
                    key={item}
                    className={
                      picker === item
                        ? 'rounded bg-blue-500 p-1'
                        : 'rounded p-1 transition-colors duration-300 hover:bg-blue-500'
                    }
                    value={item}
                    type="button"
                    onClick={(e) => setPicker(e.target.value)}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {departmentTypeOffers.includes(department) && (
          <div>
            <div className="flex rounded border border-gray-600 p-1 text-gray-300">
              <nav className="flex gap-1">
                {offerTypes.slice(0, -1).map((item) => (
                  <button
                    key={item}
                    className={
                      offerTypeFilter === item
                        ? 'rounded bg-blue-700 p-1'
                        : 'rounded p-1 transition-colors duration-300 hover:bg-blue-500/80'
                    }
                    value={item}
                    type="button"
                    onClick={(e) => setOfferTypeFilter(e.target.value)}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {(department === departmentList.Admin.home ||
          department === departmentList.GestionNav.endOffers ||
          department === departmentList.GestionNav.deletedOffers) && (
          <Dropdown
            items={['Tod@s', ...salesPeopleList]}
            dropDownFunction={(e) => setSalesPerson(e)}
            buttonName="Comercial"
          />
        )}
        <button
          onClick={clearFilters}
          className={!clearFiltersButtonEnable ? RedButton : GreyButton}
          disabled={clearFiltersButtonEnable}
        >
          Borrar filtros
        </button>
      </div>
    )
  }
}
