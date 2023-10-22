import { inputClassName, H4ClassName } from '../../components/ClassColors'
import { toggleSwitch } from './HandleFunctions'
import { Switch } from '@material-tailwind/react'
// Context
import { useMainContext } from '../../context/MainContext'
import { usersRolesList } from '../../components/Constants'

export default function DeliveryDate({ values, handleChange, setValues }) {
  const { userRole } = useMainContext()
  return (
    <>
      <h4 className={H4ClassName}>Fecha de Entrega</h4>
      <div className="-mx-3 mb-6 flex flex-wrap items-center gap-y-2 px-3">
        <div className="w-full px-3 sm:w-1/3 md:mb-0 md:w-1/3">
          <input
            disabled={userRole !== usersRolesList.admin}
            className={inputClassName}
            value={values.deliveryDate}
            name={'deliveryDate'}
            type="date"
            onChange={(e) => handleChange(e, values, setValues)}
          />
          <p
            className={
              values.deliveryDate === ''
                ? 'text-xs italic text-red-600'
                : 'text-xs italic text-gray-600'
            }
          >
            Requerido
          </p>
        </div>

        <div className="mb-4 flex items-center px-3">
          <Switch
            disabled={userRole !== usersRolesList.admin}
            color="red"
            onChange={() =>
              toggleSwitch('fixedDeliveryDate', values, setValues)
            }
            checked={values.fixedDeliveryDate}
          />
          <label className="ml-2 ">Fecha de entrega Fija</label>
        </div>
        <div className="mb-4 flex items-center gap-2 px-3 sm:w-1/3 md:w-1/3">
          {userRole === usersRolesList.admin && (
            <>
              <label>Días de Preparación:</label>
              <div className="w-1/4">
                <input
                  value={values.preparationDays}
                  name={'preparationDays'}
                  className={inputClassName}
                  type="numer"
                  placeholder="0"
                  onChange={(e) => handleChange(e, values, setValues)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
