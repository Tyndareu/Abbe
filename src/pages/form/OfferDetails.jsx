import { labelClassName, inputClassName } from '../../components/ClassColors'
// Context
import { useMainContext } from '../../context/MainContext'
import { usersRolesList } from '../../components/Constants'

export default function OfferDetails({ values, handleChange, setValues }) {
  const { userRole } = useMainContext()
  return (
    <div className="flex flex-wrap">
      <div className="mb-6 w-full px-3 sm:w-1/3 md:mb-0 md:w-1/4">
        <label className={labelClassName}>Númermo de Oferta</label>
        <input
          disabled={userRole !== usersRolesList.admin}
          className={inputClassName}
          value={values.offerNumber}
          name={'offerNumber'}
          type="text"
          placeholder="Númermo de Oferta"
          onChange={(e) => handleChange(e, values, setValues)}
        />
        <p
          className={
            values.offerNumber === ''
              ? 'text-xs italic text-red-600'
              : 'text-xs italic text-gray-600'
          }
        >
          Requerido
        </p>
      </div>
      <div className="mb-6 w-full px-3 sm:w-1/3 md:mb-0 md:w-1/4">
        <label className={labelClassName}>Número de Cliente</label>
        <input
          disabled={userRole !== usersRolesList.admin}
          value={values.clientNumber}
          name={'clientNumber'}
          className={inputClassName}
          type="text"
          placeholder="Número de Cliente"
          onChange={(e) => handleChange(e, values, setValues)}
        />
      </div>
      <div className="mb-6 w-full px-3 sm:w-1/2 md:mb-0 md:w-2/4">
        <label className={labelClassName}>Cliente</label>
        <input
          disabled={userRole !== usersRolesList.admin}
          className={inputClassName}
          type="text"
          placeholder="Cliente"
          value={values.client}
          name="client"
          onChange={(e) => handleChange(e, values, setValues)}
        />
        <p
          className={
            values.client === ''
              ? 'text-xs italic text-red-600'
              : 'text-xs italic text-gray-600'
          }
        >
          Requerido
        </p>
      </div>
    </div>
  )
}
