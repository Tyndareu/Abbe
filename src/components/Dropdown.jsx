import { useState, useEffect, useRef } from 'react'

export default function Dropdown({ buttonName, items, dropDownFunction }) {
  const [itemSelect, setItemSelect] = useState(items[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleOnClick = (item) => {
    setItemSelect(item)
    dropDownFunction(item)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="flex w-full items-center justify-between rounded bg-blue-700/70 p-2 font-normal text-gray-200 transition-colors duration-300 hover:bg-blue-500/80"
        type="button"
      >
        {`${buttonName}: ${itemSelect}`}
        <svg
          className={`ml-2.5 h-2.5 w-2.5 ${isDropdownOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
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
      {isDropdownOpen && (
        <div className="absolute top-full z-10 mt-1 w-32 rounded bg-gray-700">
          <ul className="py-2 text-sm text-gray-100">
            {items.map((item) => (
              <li
                className="block cursor-pointer p-2 hover:bg-gray-500 hover:text-white"
                key={item}
                value={item}
                onClick={() => handleOnClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
