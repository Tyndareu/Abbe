// Componentes
import { H4ClassName } from '../../components/ClassColors'
import { Switch } from '@material-tailwind/react'
// Utils
import { toggleSwitchPicker } from './HandleFunctions'
// Constants
import { pickingAssignments } from '../../components/Constants.js'
export default function PickingForm({ values, setValues }) {
  return (
    <>
      <h4 className={H4ClassName}>Picaje</h4>
      <div className="flex w-full flex-wrap gap-4 px-3 text-orange-300">
        {Object.keys(pickingAssignments)
          .slice(1)
          .map((item) => (
            <div key={item} className="flex items-center">
              <Switch
                color="blue"
                onChange={() =>
                  toggleSwitchPicker(
                    pickingAssignments[item],
                    values,
                    setValues
                  )
                }
                checked={values.picker === pickingAssignments[item]}
              />
              <label
                className={
                  values.picker === pickingAssignments[item]
                    ? 'ml-2 text-blue-300'
                    : 'ml-2'
                }
              >
                {pickingAssignments[item]}
              </label>
            </div>
          ))}
      </div>
    </>
  )
}
