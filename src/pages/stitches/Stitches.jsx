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
      name: 'price',
      value: inputs.price,
      type: 'number'
    },
    {
      label: 'Puntadas:',
      name: 'stitches',
      value: inputs.stitches,
      type: 'number'
    },
    {
      label: 'Velocidad (PPM):',
      name: 'speed',
      value: inputs.speed,
      type: 'number'
    },
    { label: 'Cuts:', name: 'cuts', value: inputs.cuts, type: 'number' },
    {
      label: 'Segundos por corte:',
      name: 'seconds',
      value: inputs.seconds,
      type: 'number'
    },
    {
      label: 'Número de prendas:',
      name: 'garments',
      value: inputs.garments,
      type: 'number'
    }
  ]
  const formClient = [
    { label: 'Cliente:', name: 'cliente', value: inputs.client, type: 'text' },
    {
      label: 'Bordado:',
      name: 'bordado',
      value: inputs.embroidery,
      type: 'text'
    },
    {
      label: 'Bastidor:',
      name: 'bastidor',
      value: inputs.hoop,
      type: 'text'
    }
  ]

  const handleInputChange = (e) => {
    console.log(e.target.value)
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
      </div>
      <EmbroideryPricingtable
        inputs={inputs}
        formCliente={formClient}
        handleInputChange={handleInputChange}
      />
    </>
  )
}
