import {
  calculateEmbroideryPerHour,
  calculateEmbroideryPrice,
  calculateTimePerEmbroidery,
  calculateTotalTime
} from './functions'

const listStyle =
  'mb-1 flex justify-between rounded border border-green-500 p-2'

export function StitchesResources({ inputs }) {
  return (
    <div className="w-80 text-left text-green-500">
      <div className={listStyle}>
        <p>Tiempo por Bordado:</p>
        <p>{calculateTimePerEmbroidery(inputs)}</p>
      </div>
      <div className={listStyle}>
        <p>Bordados por hora:</p>
        <p>{calculateEmbroideryPerHour(inputs)}</p>
      </div>
      <div className={listStyle}>
        <p>Precio por Bordado:</p>
        <p>{calculateEmbroideryPrice(inputs)}€</p>
      </div>
      <div className={listStyle}>
        <p>Tiempo Total {inputs.garments} Prenda/s:</p>
        <p>{calculateTotalTime(inputs)}</p>
      </div>
      {/* <div className={listStyle}>
        <p>Precio Total {inputs.garments} Prenda/s (Sin dto):</p>
        <p>{calculateTotalPrice(inputs)}€</p>
      </div> */}
    </div>
  )
}
export function StitchForm({ formElements, handleInputChange }) {
  return (
    <>
      <form className=" text-orange-500">
        {formElements.map((element) => (
          <div
            className=" flex items-center justify-between gap-3"
            key={element.name}
          >
            <label>{element.label}</label>
            <input
              type={element.type}
              className="w-28 rounded-md border border-blue-500 bg-gray-900 p-1 text-blue-500"
              value={element.value}
              onChange={handleInputChange}
              name={element.name}
            />
          </div>
        ))}
      </form>
    </>
  )
}

export const EmbroideryPricingtable = ({
  inputs,
  handleInputChange,
  formCliente
}) => {
  return (
    <>
      <div className="text-orange-500">
        <form className="mb-3 flex justify-center gap-2">
          {formCliente.map((element) => (
            <div
              className="flex items-center justify-center gap-1"
              key={element.name}
            >
              <label>{element.label}</label>
              <input
                type={element.type}
                className="rounded-md border border-blue-500 bg-gray-900 p-1 text-blue-500"
                value={element.value}
                onChange={handleInputChange}
                name={element.name}
              />
            </div>
          ))}
        </form>
      </div>

      <div className="flex justify-around rounded-md p-8 text-gray-200">
        <table>
          <thead>
            <tr className="flex justify-center gap-10">
              <th colSpan={3}>Descuento por cantidad</th>
              <th>Descuento %</th>
              <th>Precio Unidad</th>
            </tr>
          </thead>
          <tbody className="border-t border-blue-500">
            {generatetableRows(inputs)}
          </tbody>
        </table>
      </div>
      <div className="m-auto flex max-w-[700px] justify-center gap-10 rounded-md border border-blue-500 p-5 text-blue-500">
        <p className="text-gray-200">{inputs.cliente}</p>
        <p>
          Bordado: <span className="text-gray-200">{inputs.bordado}</span>
        </p>
        <p>
          Bastidor: <span className="text-gray-200">{inputs.bastidor}</span>
        </p>
      </div>
    </>
  )
}
function generatetableRows(inputs) {
  const price = calculateEmbroideryPrice(inputs)
  const discounttableData = [
    [1, 9, ''],
    [10, 25, 5],
    [26, 49, 10],
    [50, 99, 15],
    ['+100', '', 20]
  ]

  function calculateDiscountedPrice(discount) {
    return (price - (price * discount) / 100).toFixed(2)
  }

  return discounttableData.map((row, index) => (
    <tr
      className="flex justify-around gap-20 border-b border-blue-500"
      key={index}
    >
      {row.map((cell, index) => (
        <td className="flex justify-center" key={index}>
          {cell}
        </td>
      ))}
      <td>{calculateDiscountedPrice(row[2])}€</td>
    </tr>
  ))
}
