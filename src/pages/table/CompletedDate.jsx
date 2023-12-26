import moment from 'moment'
import { getCompletedDateColor } from '../../components/Functions'

export default function completedDate({ offer }) {
  const color = getCompletedDateColor(
    moment(offer.deliveryDate).isBefore(offer.completedDate, 'day')
      ? 'before'
      : moment(offer.completedDate).isSame(offer.deliveryDate, 'day')
        ? 'same'
        : 'after'
  )
  return (
    <div className={`rounded p-1 text-center ${color}`}>
      {moment(offer.completedDate).format('DD/MM/YYYY')}
    </div>
  )
}
