import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

import backup from '../json/backup.json'
import {
  months,
  getUniqueMonths,
  openOffers,
  deletedOffers,
  completedOffers,
  compareDates,
  charAtOpcions
} from '../components/statisticsFunctions'

export default function Statistics() {
  const offers = Object.values(backup.__collections__.offers)
  const monthsFromOffers = getUniqueMonths(offers)
  const [selectedMonth, setSelectedMonth] = useState(monthsFromOffers[0])

  const offersMonth = offers.filter((offer) => {
    return offer.deliveryDate.split('-')[1] === selectedMonth
  })

  const statistics = {
    offersInTime: compareDates(offers)
  }
  const series = [
    {
      name: 'Ofertas',
      data: [
        offers.length,
        openOffers(offers),
        deletedOffers(offers),
        completedOffers(offers),
        statistics.offersInTime.completedBeforeDeadline,
        statistics.offersInTime.completedOnTime,
        statistics.offersInTime.completedAfterDeadline
      ]
    }
  ]

  useEffect(() => {}, [offers])

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-blue-500">
        Estadísticas
      </h1>
      <div className="m-3 flex flex-wrap justify-center gap-2">
        {monthsFromOffers.map((month) => (
          <button
            onClick={() => setSelectedMonth(month)}
            className="rounded bg-blue-500 p-1 px-2 transition-colors duration-300 hover:bg-blue-700"
            key={month}
          >
            {months[month]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 ">
        <div className="w-[48%]  min-w-[550px]">
          <h3 className="text-center text-blue-500">Todas las Ofertas</h3>
          <div>
            <Chart
              options={charAtOpcions}
              series={series}
              type="bar"
              height={300}
            />
          </div>
        </div>

        <div className="w-[48%]  min-w-[550px]">
          <h3 className="text-center text-blue-500">{months[selectedMonth]}</h3>
          <div>
            <Chart
              options={charAtOpcions}
              series={series}
              type="bar"
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  )
}
