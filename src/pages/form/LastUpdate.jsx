import { useState } from 'react'
import { RedButton } from '../../components/ClassColors'

export default function LastUpdate({ lastUpdate }) {
  const [showUpdates, setShowUpdates] = useState(false)
  return (
    lastUpdate.length > 0 && (
      <>
        <button
          onClick={() => setShowUpdates(!showUpdates)}
          className={RedButton}
        >
          {showUpdates ? 'Ocultar Cambios' : 'Mostrar Cambios'}
        </button>
        {showUpdates && (
          <ol className="mt-3 list-disc">
            {lastUpdate.map((update, index) => (
              <li key={index} className="mb-1  text-gray-400">
                <span className="text-orange-500"> {update.split('-')[0]}</span>
                :
                <span className="text-yellow-500">{update.split('-')[1]} </span>
                -<span className="text-blue-500">{update.split('-')[2]}</span>
              </li>
            ))}
          </ol>
        )}
      </>
    )
  )
}
