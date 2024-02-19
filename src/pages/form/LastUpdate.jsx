import { useState } from 'react'
import { RedButton, RedButtonSpan } from '../../components/ClassColors'

export default function LastUpdate({ lastUpdate }) {
  const [showUpdates, setShowUpdates] = useState(false)
  return (
    lastUpdate.length > 0 && (
      <>
        <button
          onClick={() => setShowUpdates(!showUpdates)}
          className={RedButton}
        >
          <span className={RedButtonSpan}></span>
          {showUpdates ? 'Ocultar Cambios' : 'Mostrar Cambios'}
        </button>
        {showUpdates && (
          <table className="mt-2">
            <thead>
              <tr className='text-blue-500'>
                <th>Fecha</th>
                <th>Acción</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {lastUpdate.map((update, index) => (
                <tr key={index}>
                  <td className="px-5 text-orange-500">{update.split('-')[1]}</td>
                  <td className="px-5 text-yellow-500">{update.split('-')[0]}</td>
                  <td className='text-blue-500'>{update.split('-')[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    )
  )
}
