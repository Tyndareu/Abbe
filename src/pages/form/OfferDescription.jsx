import {
  H4ClassName,
  inputClassName,
  labelClassName
} from '../../components/ClassColors'
import { useMainContext } from '../../context/MainContext'
import { usersRolesList } from '../../components/Constants'

export default function OfferDescription({ values, handleChange, setValues }) {
  const { userRole } = useMainContext()
  return (
    <>
      <h4 className={H4ClassName}>Detalle de la Oferta</h4>
      <div className="mb-6 w-full px-3">
        <label className={labelClassName}>Descripción Corta</label>
        <input
          disabled={userRole !== usersRolesList.admin}
          value={values.offerDetails}
          name="offerDetails"
          className={inputClassName}
          type="text"
          onChange={(e) => handleChange(e, values, setValues)}
        />
      </div>
      <div className="mb-6 w-full resize-y px-3">
        <label className={labelClassName}>Descripción Larga</label>
        <textarea
          disabled={userRole !== usersRolesList.admin}
          className={inputClassName}
          value={values.offerDetailsExtended}
          name="offerDetailsExtended"
          onChange={(e) => handleChange(e, values, setValues)}
        />
      </div>
    </>
  )
}
