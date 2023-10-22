import { useMemo } from 'react'
import { dateEndColor, offerTypeColor } from './Constants'

export function LegendDateEndColor() {
  const values = useMemo(() => Object.values(dateEndColor), [dateEndColor])

  return (
    <div className="mt-2 flex flex-wrap gap-1 text-gray-200">
      {values.map((value) => (
        <p className={`rounded p-2 ${value.color}`} key={value.name}>
          {value.name}
        </p>
      ))}
    </div>
  )
}

export function LegendOfferTypeColor() {
  const values = Object.values(offerTypeColor)
  return (
    <div className="mt-2 flex flex-wrap gap-1 text-gray-200">
      {values.map((value) => (
        <p className={`rounded p-2 ${value.color}`} key={value.name}>
          {value.name}
        </p>
      ))}
    </div>
  )
}
