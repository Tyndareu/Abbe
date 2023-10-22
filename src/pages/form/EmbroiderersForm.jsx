// Componentes
import { H4ClassName, selectClassName } from '../../components/ClassColors'
import { ArrowDropdownIcon } from '../../components/Icons'
// Utils
import { handleDropdown } from './HandleFunctions'
// Constants
import { embroiderers } from '../../components/Constants.js'

export default function EmbroiderersForm({ values, setValues }) {
  return (
    <>
      <h4 className={H4ClassName}>Bordadora</h4>
      <div className="w-full px-3 sm:w-1/3 md:w-2/4">
        <div className="relative">
          <select
            value={values.embroidery}
            onChange={(e) => handleDropdown(e, 'embroidery', values, setValues)}
            className={selectClassName}
          >
            {embroiderers.map((option) => (
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
    </>
  )
}
