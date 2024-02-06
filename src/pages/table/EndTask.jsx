import { useState } from 'react'

import moment from 'moment'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'sonner'
import { EndTaskButton } from '../../components/ClassColors'
import { departmentList, today } from '../../components/Constants'
import { IconCheck } from '../../components/Icons'
import Modal from '../../components/Modal'
import { useMainContext } from '../../context/MainContext'
import { Auth, updateOffer } from '../../firebase/Api'

export default function EndTask({ offer }) {
  const { department, setOffers } = useMainContext()
  const [showModal, setShowModal] = useState(false)
  const [preparationSendTask, setPreparationSendTask] = useState('')
  const [user] = useAuthState(Auth)
  const currentTime = moment().format('HH:mm')

  const handleEndTask = async () => {
    switch (department) {
      case departmentList.Admin.picaje:
        offer.department.picaje = false
        offer.department.preparation = true
        break
      case departmentList.Admin.stamping:
        offer.department.stamping = false
        offer.department.preparation = true
        break
      case departmentList.Admin.embroideries:
        offer.department.embroideries = false
        offer.department.confection = true
        break
      case departmentList.Admin.confection:
        offer.department.confection = false
        offer.department.warehouse = true
        break
      case departmentList.Admin.warehouse:
        offer.status = 'completed'
        offer.department.picaje = false
        offer.department.stamping = false
        offer.department.embroideries = false
        offer.department.preparation = false
        offer.department.confection = false
        offer.department.warehouse = false
        offer.completedDate = today.split('/').reverse().join('-')
        break
      default:
        break
    }
    const updatedOffer = {
      ...offer,
      lastModificationDate: [
        ...offer.lastModificationDate,
        `Finalizar Tarea ${department} - ${today} ${currentTime} - ${user.email}`
      ]
    }

    await updateOffer(offer.id, updatedOffer).then(() => {
      toast.success('Oferta actualizada!')
      setOffers((prevOffers) => {
        const index = prevOffers.findIndex((o) => o.id === offer.id)
        const newOffers = [...prevOffers]
        newOffers.splice(index, 1)
        return newOffers
      })
    })
    setShowModal(false)
  }

  const handleEndTaskPreparation = async (preparationEndTask) => {
    setPreparationSendTask(preparationEndTask)
    setShowModal(true)
  }

  const handleEndTaskPreparationConfirm = async () => {
    if (preparationSendTask === departmentList.Admin.embroideries) {
      offer.department.embroideries = true
      offer.department.preparation = false
    } else if (preparationSendTask === departmentList.Admin.confection) {
      offer.department.confection = true
      offer.department.preparation = false
    }
    const updatedOffer = {
      ...offer,
      lastModificationDate: [
        ...offer.lastModificationDate,
        `Finalizar Tarea ${preparationSendTask} - ${today} ${currentTime} - ${user.email}`
      ]
    }
    await updateOffer(offer.id, updatedOffer).then(() => {
      toast.success('Oferta actualizada!')
      setOffers((prevOffers) => {
        const index = prevOffers.findIndex((o) => o.id === offer.id)
        const newOffers = [...prevOffers]
        newOffers.splice(index, 1)
        return newOffers
      })
    })
    setShowModal(false)
  }

  if (department !== departmentList.Admin.preparation) {
    return (
      <>
        <td
          className="text-orange-500 transition-all hover:-translate-x-2 hover:bg-gray-800 hover:text-green-400"
          onClick={() => setShowModal(true)}
        >
          <IconCheck />
        </td>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onConfirm={handleEndTask}
            content={
              department === departmentList.Admin.warehouse
                ? '¿Confirma que quiere finalizar la Oferta?'
                : department === departmentList.Admin.picaje
                  ? '¿Confirma que quiere enviar la Oferta a Preparación?'
                  : department === departmentList.Admin.stamping
                    ? '¿Confirma que quiere enviar la Oferta a Preparación?'
                    : department === departmentList.Admin.embroideries
                      ? '¿Confirma que quiere enviar la Oferta a Confección?'
                      : '¿Confirma que quiere enviar la Oferta a Almacén?'
            }
            title="¿Terminar tarea?"
          />
        )}
      </>
    )
  } else {
    return (
      <>
        <td className="flex justify-center gap-x-1">
          <button
            onClick={() =>
              handleEndTaskPreparation(departmentList.Admin.embroideries)
            }
            className={EndTaskButton}
          >
            Bordados
          </button>
          <button
            onClick={() =>
              handleEndTaskPreparation(departmentList.Admin.confection)
            }
            className={EndTaskButton}
          >
            Confección
          </button>
        </td>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onConfirm={handleEndTaskPreparationConfirm}
            content={
              preparationSendTask === departmentList.Admin.embroideries
                ? '¿Confirma que quiere enviar la Oferta a Bordados?'
                : '¿Confirma que quiere enviar la Oferta a Confección?'
            }
            title="¿Terminar tarea?"
          />
        )}
      </>
    )
  }
}
