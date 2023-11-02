import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import backup from '../json/backup.json'
import {
  months,
  getUniqueMonths,
  charAtOffers,
  charAtDays,
  getDataFromOffers,
  filterOffers,
  calculateAverageDays
} from '../components/statisticsFunctions'

export default function Statistics() {
  const offers = Object.values(backup.__collections__.offers)
  const monthsFromOffers = getUniqueMonths(offers)

  const [selectedMonthFirst, setSelectedMonthFirst] = useState(
    monthsFromOffers[0]
  )
  const [selectedMonthSecond, setSelectedMonthSecond] = useState(
    monthsFromOffers[monthsFromOffers.length - 1]
  )

  const [seriesFirst, setSeriesFirst] = useState([])
  const [seriesSecond, setSeriesSecond] = useState([])

  const [seriesDaysFirst, setSeriesDaysFirst] = useState([])
  const [seriesDaysSecond, setSeriesDaysSecond] = useState([])

  const updateSeriesData = async (selectedMonth, setSeries, setSeriesDays) => {
    const filteredOffers = await filterOffers(
      selectedMonth,
      offers,
      monthsFromOffers
    )
    const { dataToCompare, dataDays } = getDataFromOffers(filteredOffers)

    setSeries([
      {
        name: 'Ofertas',
        data: [
          dataToCompare.totalOffers,
          dataToCompare.completedOffers,
          dataToCompare.openOffers,
          dataToCompare.beforeDeliveryDate,
          dataToCompare.onDeliveryDate,
          dataToCompare.afterDeliveryDate
        ]
      }
    ])

    setSeriesDays([
      {
        name: 'Days',
        data: [
          calculateAverageDays(dataDays.totalDays, dataDays.totalOffers),
          calculateAverageDays(
            dataDays.exteriorTotalDays,
            dataDays.exteriorTotalOffers
          ),
          calculateAverageDays(
            dataDays.emborideryTotalDays,
            dataDays.emborideryTotalOffers
          ),
          calculateAverageDays(
            dataDays.stockTotalDays,
            dataDays.stockTotalOffers
          )
        ]
      }
    ])
  }

  useEffect(() => {
    updateSeriesData(selectedMonthFirst, setSeriesFirst, setSeriesDaysFirst)
  }, [selectedMonthFirst])

  useEffect(() => {
    updateSeriesData(selectedMonthSecond, setSeriesSecond, setSeriesDaysSecond)
  }, [selectedMonthSecond])

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-blue-500">
        Estadísticas
      </h1>
      <div className="flex flex-wrap justify-center gap-1">
        {[selectedMonthFirst, selectedMonthSecond].map(
          (selectedMonth, index) => (
            <div
              key={index}
              className="w-[48%] min-w-[650px] rounded-xl border border-blue-500 p-1"
            >
              <div className="m-3 flex flex-wrap justify-center gap-2">
                {monthsFromOffers.map((month) => (
                  <button
                    onClick={() =>
                      index === 0
                        ? setSelectedMonthFirst(month)
                        : setSelectedMonthSecond(month)
                    }
                    className={`rounded p-1 px-2 transition-colors duration-300
                  ${
                    month === selectedMonth
                      ? 'bg-blue-500 text-gray-200 hover:bg-blue-700'
                      : 'border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-gray-200'
                  }`}
                    key={month}
                  >
                    {months[month]}
                  </button>
                ))}
              </div>
              <h2 className="text-center text-blue-500">
                Rendimiento de Ofertas y Control de Finalización
              </h2>

              <div>
                <Chart
                  options={charAtOffers}
                  series={index === 0 ? seriesFirst : seriesSecond}
                  type="bar"
                  height={300}
                />
              </div>
              <h2 className="text-center text-blue-500">
                Días promedio desde la creación de la oferta hasta su
                finalización
              </h2>
              <div>
                <Chart
                  options={charAtDays}
                  series={index === 0 ? seriesDaysFirst : seriesDaysSecond}
                  type="bar"
                  height={300}
                />
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
