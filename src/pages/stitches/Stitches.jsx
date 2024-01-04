import { useState } from 'react'

import {
  StitchesResources,
  StitchForm,
  EmbroideryPricingtable
} from './StitchesResources'

export default function Stitches() {
  const [inputs, setInputs] = useState({
    price: '20',
    stitches: '45000',
    speed: 750,
    cuts: '0',
    seconds: '3',
    garments: '1'
  })
  const formElements = [
    {
      label: 'Precio por Hora:',
      name: 'Precio',
      value: inputs.price,
      type: 'number'
    },
    {
      label: 'Puntadas:',
      name: 'puntadas',
      value: inputs.stitches,
      type: 'number'
    },
    {
      label: 'Velocidad (PPM):',
      name: 'velocidad',
      value: inputs.speed,
      type: 'number'
    },
    { label: 'Cuts:', name: 'cuts', value: inputs.cuts, type: 'number' },
    {
      label: 'Segundos por corte:',
      name: 'segundos',
      value: inputs.seconds,
      type: 'number'
    },
    {
      label: 'Número de prendas:',
      name: 'prendas',
      value: inputs.garments,
      type: 'number'
    }
  ]
  const formClient = [
    { label: 'Client:', name: 'client', value: inputs.client, type: 'text' },
    {
      label: 'Embroidery:',
      name: 'embroidery',
      value: inputs.embroidery,
      type: 'text'
    },
    {
      label: 'Hoop:',
      name: 'hoop',
      value: inputs.hoop,
      type: 'text'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (e.target.name === 'speed') {
      if (e.target.value < 1) {
        setInputs((values) => ({ ...values, [name]: 1 }))
      } else {
        setInputs((values) => ({ ...values, [name]: value }))
      }
    } else {
      setInputs((values) => ({ ...values, [name]: value }))
    }
  }

  return (
    <>
      <div className="mb-20 mt-5 flex flex-wrap justify-center gap-8">
        <StitchForm
          formElements={formElements}
          handleInputChange={handleInputChange}
        />
        <StitchesResources inputs={inputs} />
        <EmbroideryPricingtable
          inputs={inputs}
          formCliente={formClient}
          handleInputChange={handleInputChange}
        />
      </div>
    </>
  )
}
