import { useEffect } from 'react'

export default function Modal({ showModal, setShowModal, content, onConfirm }) {
  const handleClickOutside = (e) => {
    if (e.target.id === 'modal') {
      setShowModal(false)
    }
  }

  useEffect(() => {
    const handler = (e) => handleClickOutside(e)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  })

  return (
    <>
      {showModal && (
        <div
          id="modal"
          className="fixed inset-0 z-50 flex overflow-y-auto overflow-x-hidden font-bold outline-none focus:outline-none"
        >
          <div className="mx-auto my-48 w-auto max-w-3xl text-gray-800">
            <div className="flex w-full flex-col rounded-lg bg-gray-300 p-8 text-gray-800 shadow-lg outline-none focus:outline-none">
              <div className="relative flex-auto p-3">
                <p className="my-4 text-lg leading-relaxed">{content}</p>
              </div>

              <div className="flex items-center justify-center gap-2 p-3">
                <button
                  className="rounded  border-2 border-red-700 p-3 font-bold transition-all duration-500 hover:bg-red-700 hover:text-white"
                  onClick={() => setShowModal(false)}
                >
                  CANCELAR
                </button>

                <button
                  className="rounded border-2 border-blue-700 p-3 font-bold transition-all duration-500 hover:bg-blue-700 hover:text-white"
                  onClick={onConfirm}
                >
                  ACEPTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
