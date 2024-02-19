export default function NewOffer({ offer }) {
  return offer.newDate ? (
    <p className="absolute right-2 top-1 w-8 font-extrabold">New</p>
  ) : null
}
