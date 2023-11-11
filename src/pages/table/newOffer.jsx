import newOfferPNG from '../../img/newOffer.png'
import moment from 'moment'

export default function NewOffer({ offer }) {
  if (!offer.offerDate) {
    return null
  }

  const formattedOfferDate = moment(offer.offerDate, 'DD/MM/YYYY').format(
    'YYYY-MM-DD'
  )
  const today = moment().format('YYYY-MM-DD')
  const daysDifference = moment(today).diff(formattedOfferDate, 'days')

  if (daysDifference > 2) {
    return null
  }

  return (
    <img
      src={newOfferPNG}
      alt="New Offer"
      className="absolute right-2 top-0 w-8"
    />
  )
}
