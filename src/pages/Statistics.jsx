import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

import backup from '../json/backup.json'
import {
  months,
  getUniqueMonths,
  openOffers,
  completedOffers,
  compareDates,
  charAtOpcions
} from '../components/statisticsFunctions'

export default function Statistics() {
  const offers = Object.values(backup.__collections__.offers)

  const monthsFromOffers = getUniqueMonths(offers)
  const [selectedMonthFirst, setSelectedMonthFist] = useState(
    monthsFromOffers[0]
  )
  const [selectedMonthSecond, setSelectedMonthSecond] = useState(
    monthsFromOffers[monthsFromOffers.length - 1]
  )
  const [seriesFirst, setSeriesFirst] = useState([])
  const [seriesSecond, setSeriesSecond] = useState([])

  useEffect(() => {
    const offersFilters = offers
    const offersFilter = async () => {
      if (selectedMonthFirst === monthsFromOffers[0]) return offersFilters
      const filteredOffers = offersFilters.filter(
        (offer) => offer.offerDate.split('/')[1] === selectedMonthFirst
      )

      return filteredOffers
    }

    const updateSeries = async () => {
      const filteredOffers = await offersFilter()

      setSeriesFirst([
        {
          name: 'Ofertas',
          data: [
            filteredOffers.length,
            completedOffers(filteredOffers),
            openOffers(filteredOffers),
            ...Object.values(compareDates(filteredOffers))
          ]
        }
      ])
    }
    updateSeries()
  }, [selectedMonthFirst])

  useEffect(() => {
    const offersFilters = offers
    const offersFilter = async () => {
      if (selectedMonthSecond === monthsFromOffers[0]) return offersFilters
      const filteredOffers = offersFilters.filter(
        (offer) => offer.offerDate.split('/')[1] === selectedMonthSecond
      )

      return filteredOffers
    }

    const updateSeries = async () => {
      const filteredOffers = await offersFilter()

      setSeriesSecond([
        {
          name: 'Ofertas',
          data: [
            filteredOffers.length,
            completedOffers(filteredOffers),
            openOffers(filteredOffers),
            ...Object.values(compareDates(filteredOffers))
          ]
        }
      ])
    }

    updateSeries()
  }, [selectedMonthSecond])

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-blue-500">
        Estadísticas
      </h1>

      <div className="flex flex-wrap gap-1 ">
        <div className="w-[48%]  min-w-[650px]">
          <div className="m-3 flex flex-wrap justify-center gap-2">
            {monthsFromOffers.map((month) => (
              <button
                onClick={() => setSelectedMonthFist(month)}
                className={`rounded p-1 px-2 transition-colors duration-300
                ${
                  month === selectedMonthFirst
                    ? ' bg-blue-500 text-gray-200 hover:bg-blue-700'
                    : ' border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-gray-200'
                }`}
                key={month}
              >
                {months[month]}
              </button>
            ))}
          </div>
          <div>
            <Chart
              options={charAtOpcions}
              series={seriesFirst}
              type="bar"
              height={300}
            />
          </div>
        </div>

        <div className="w-[48%]  min-w-[650px]">
          <div className="m-3 flex flex-wrap justify-center gap-2">
            {monthsFromOffers.map((month) => (
              <button
                onClick={() => setSelectedMonthSecond(month)}
                className={`rounded p-1 px-2 transition-colors duration-300
                  ${
                    month === selectedMonthSecond
                      ? ' bg-blue-500 text-gray-200 hover:bg-blue-700'
                      : ' border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-gray-200'
                  }`}
                key={month}
              >
                {months[month]}
              </button>
            ))}
          </div>
          <div>
            <Chart
              options={charAtOpcions}
              series={seriesSecond}
              type="bar"
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  )
}
