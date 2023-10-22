import {
  salesPeopleList,
  offerType,
  usersRolesList
} from '../../components/Constants.js'
import { H4ClassName, selectClassName } from '../../components/ClassColors.js'
import { ArrowDropdownIcon } from '../../components/Icons.jsx'
// Context
import { useMainContext } from '../../context/MainContext'

export default function SalesPerson({ handleDropdown, values, setValues }) {
  const { userRole } = useMainContext()
  return (
    <div className="flex">
      {userRole === usersRolesList.admin && (
        <div className="mb-6 w-full sm:w-1/3 md:w-1/4">
          <h4 className={H4ClassName}>Comercial</h4>
          <div className="px-3">
            <div className="relative">
              <select
                disabled={userRole !== usersRolesList.admin}
                value={values.salesPerson}
                onChange={(e) =>
                  handleDropdown(e, 'salesPerson', values, setValues)
                }
                className={selectClassName}
              >
                {salesPeopleList.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowDropdownIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mb-6 w-full sm:w-1/3 md:w-1/4">
        <h4 className={H4ClassName}>Tipo de Oferta</h4>
        <div className="px-3">
          <div className="relative">
            <select
              disabled={userRole !== usersRolesList.admin}
              value={values.offerType}
              onChange={(e) =>
                handleDropdown(e, 'offerType', values, setValues)
              }
              className={selectClassName}
            >
              {Object.values(offerType)
                .slice(1)
                .map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
