import newOfferPNG from '../../img/newOffer.png'

export default function NewOffer({ offer }) {
  if (!offer.newDate) {
    return null
  }

  if (!offer.newDate) return null

  return (
    <img
      src={newOfferPNG}
      alt="New Offer"
      className="absolute right-2 top-0 w-8"
    />
  )
}
