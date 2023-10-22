import moment from 'moment'
import { departmentList } from '../../components/Constants'
import { getDateEndColor } from '../../components/Functions'

export default function DeliveryDate({ offer, department }) {
  let colorDate
  if (
    department === departmentList.Admin.offers ||
    department === departmentList.Admin.warehouse
  ) {
    colorDate = offer.deliveryDate
  } else {
    colorDate = offer.preparationDate
  }
  const days = moment(colorDate).diff(moment(), 'days')
  const color = getDateEndColor(days)

  return (
    <div className={`rounded p-1 text-center ${color}`}>
      {moment(colorDate).format('DD/MM/YYYY')}
    </div>
  )
}
