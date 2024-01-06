import { useState, useEffect, useRef } from 'react'
import { updateOffer } from '../../firebase/Api'
import { toast } from 'sonner'
import { useMainContext } from '../../context/MainContext'

function Dropdown({ offer, options, field }) {
  const { setOffers } = useMainContext()

  const [selected, setSelected] = useState(offer[field])
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleChange = async (newValue) => {
    setSelected(newValue)
    setIsOpen(false)

    const updatedOffer = {
      ...offer,
      [field]: newValue
    }

    try {
      await updateOffer(offer.id, updatedOffer).then(() => {
        toast.success('Oferta actualizada')

        setOffers((offers) => {
          const index = offers.findIndex((o) => o.id === offer.id)
          const newOffers = [...offers]
          newOffers[index] = updatedOffer
          return newOffers
        })
      })
    } catch (error) {
      console.error(error)
      toast.error('Error actualizando oferta')
    }
  }

  const btnClass =
    selected === options[0] || selected === ''
      ? 'bg-red-800 hover:bg-red-700'
      : 'border border-red-400'

  return (
    <td ref={dropdownRef}>
      <button
        className={`${btnClass} flex w-11/12 items-center justify-between rounded p-2 text-sm font-normal text-gray-200`}
        onClick={toggleDropdown}
      >
        {selected === options[0] || selected === '' ? 'Elegir' : selected}

        <svg
          className={`ml-2.5 h-2.5 w-2.5 ${isOpen && 'rotate-180'}`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-32 rounded border bg-red-500">
          <ul className="py-2 text-sm font-normal text-white">
            {options.map((item) => (
              <li
                key={item}
                className="block cursor-pointer p-2 transition-all duration-200 hover:bg-red-900 hover:font-bold"
                onClick={() => handleChange(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </td>
  )
}

export default Dropdown
