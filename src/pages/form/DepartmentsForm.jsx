import { Switch } from '@material-tailwind/react'
// Utils
import { toggleSwitchDepartment } from './HandleFunctions'
// Constants
import { departmentList } from '../../components/Constants.js'
import { H4ClassName } from '../../components/ClassColors'

export default function DepartmentsForm({ values, setValues }) {
  return (
    <>
      <h4 className={H4ClassName}>Departamento/s</h4>
      <div className="mb-3 flex w-full flex-wrap gap-2 px-3 text-orange-300/70">
        {Object.keys(departmentList.Admin)
          .slice(1)
          .map((item) => (
            <div key={item} className="mb-4 flex items-center">
              <Switch
                color="blue"
                onChange={() => toggleSwitchDepartment(item, values, setValues)}
                checked={values.department[item]}
              />
              <label
                className={
                  values.department[item] ? 'ml-2  text-blue-300' : 'ml-2 '
                }
              >
                {departmentList.Admin[item]}
              </label>
            </div>
          ))}
      </div>
    </>
  )
}
