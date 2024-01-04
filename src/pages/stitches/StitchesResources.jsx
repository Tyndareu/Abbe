import {
  calculateTimePerEmbroidery,
  calculateEmbroideryPerHour,
  calculateEmbroideryPrice,
  calculateTotalTime,
  calculateTotalPrice
} from './functions'

const listItemStyle = 'w-[65%] mt-1'
const listItemInfoStyle = 'w-[35%] mt-1'

export function StitchesResources({ inputs }) {
  return (
    <div className="w-80 text-left">
      <div>
        <div className={listItemStyle}>Tiempo por Bordado:</div>
        <div className={listItemInfoStyle}>
          {calculateTimePerEmbroidery(inputs)}
        </div>
      </div>
      <div>
        <div className={listItemStyle}>Bordados por hora:</div>
        <div className={listItemInfoStyle}>
          {calculateEmbroideryPerHour(inputs)}
        </div>
      </div>
      <div>
        <div className={listItemStyle}>Precio por Bordado:</div>
        <div className={listItemInfoStyle}>
          {calculateEmbroideryPrice(inputs)}€
        </div>
      </div>
      <div>
        <div className={listItemStyle}>
          Tiempo Total {inputs.prendas} Prenda/s:
        </div>
        <div className={listItemInfoStyle}>{calculateTotalTime(inputs)}</div>
      </div>
      <div>
        <div className={listItemStyle}>
          Precio Total {inputs.prendas} Prenda/s:
        </div>
        <div className={listItemInfoStyle}>{calculateTotalPrice(inputs)}€</div>
      </div>
    </div>
  )
}
export function StitchForm({ formElements, handleInputChange }) {
  return (
    <>
      <div className="w-72">
        <form>
          <form className="mb-3">
            {formElements.map((element, index) => (
              <div className=" flex justify-between" key={element.name}>
                <div>
                  <div className="w-48 text-right">{element.label}</div>
                </div>
                <form
                  className="w-24"
                  name={element.name}
                  value={element.value}
                  onChange={handleInputChange}
                  type={element.type}
                />
              </div>
            ))}
          </form>
        </form>
      </div>
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
      <div>
        <form>
          <form className="mb-3">
            {formCliente.map((element) => (
              <div className="flex justify-center gap-1" key={element.name}>
                <div>
                  <div className="w-24">{element.label}</div>
                </div>
                <form
                  className="w-48"
                  name={element.name}
                  value={element.value}
                  onChange={handleInputChange}
                  type={element.type}
                />
              </div>
            ))}
          </form>
        </form>
      </div>
      <div className="w-full rounded-md bg-white p-8">
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Descuento por cantidad</th>
                <th>Descuento %</th>
                <th>Precio Unidad</th>
              </tr>
            </thead>
            <tbody>{generatetableRows(inputs)}</tbody>
          </table>
          <div className="justify-center">
            <div>{inputs.cliente}</div>
            <div>Bordado: {inputs.bordado}</div>
            <div>Bastidor: {inputs.bastidor}</div>
          </div>
        </div>
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
    [100, '', 20]
  ]

  function calculateDiscountedPrice(discount) {
    return (price - (price * discount) / 100).toFixed(2)
  }

  return discounttableData.map((row, index) => (
    <tr key={index}>
      {row.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
      <td>{calculateDiscountedPrice(row[2])}€</td>
    </tr>
  ))
}
