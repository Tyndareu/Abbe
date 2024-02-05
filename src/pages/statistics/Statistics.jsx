import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import backup from '../../json/backup.json'
import {
  charAtDays,
  charAtOffers,
  filterByYear,
  filterOffersByMonth,
  months,
  newMonthsFromYears,
  updateSeriesData
} from './functions'

export default function Statistics() {
  const offers = Object.values(backup.__collections__.offers)
  const [offersByYears, setOffersByYears] = useState({})
  const [monthlyOffers, setMonthlyOffers] = useState({})
  const [selectedYear, setSelectedYear] = useState('2023')

  const [selectedMonthFirst, setSelectedMonthFirst] = useState()
  const [selectedMonthSecond, setSelectedMonthSecond] = useState()

  const [seriesFirst, setSeriesFirst] = useState([])
  const [seriesSecond, setSeriesSecond] = useState([])

  const [seriesDaysFirst, setSeriesDaysFirst] = useState([])
  const [seriesDaysSecond, setSeriesDaysSecond] = useState([])

  let monthsFromYears =
    offersByYears && newMonthsFromYears(offersByYears[selectedYear])

  useEffect(() => {
    setOffersByYears(filterByYear(offers))
  }, [])

  useEffect(() => {
    setSelectedMonthFirst(monthsFromYears && monthsFromYears[0])
    setSelectedMonthSecond(
      monthsFromYears && monthsFromYears[monthsFromYears.length - 1]
    )
    offersByYears[selectedYear] &&
      setMonthlyOffers(filterOffersByMonth(offersByYears[selectedYear]))
  }, [offersByYears])

  const selectYear = async (year) => {
    setSelectedYear(year)
    setMonthlyOffers(filterOffersByMonth(offersByYears[year]))
    monthsFromYears = newMonthsFromYears(offersByYears[year])
    setSelectedMonthFirst(monthsFromYears && monthsFromYears[0])
    setSelectedMonthSecond(
      monthsFromYears && monthsFromYears[monthsFromYears.length - 1]
    )

    updateSeriesData({
      selectedMonth: selectedMonthFirst,
      setSeries: setSeriesFirst,
      setSeriesDays: setSeriesDaysFirst,
      monthlyOffers: offersByYears[year],
      offersByYears,
      selectedYear: year
    })
  }

  useEffect(() => {
    updateSeriesData({
      selectedMonth: selectedMonthFirst,
      setSeries: setSeriesFirst,
      setSeriesDays: setSeriesDaysFirst,
      monthlyOffers,
      offersByYears,
      selectedYear
    })
  }, [selectedMonthFirst])

  useEffect(() => {
    updateSeriesData({
      selectedMonth: selectedMonthSecond,
      setSeries: setSeriesSecond,
      setSeriesDays: setSeriesDaysSecond,
      monthlyOffers,
      offersByYears,
      selectedYear
    })
  }, [selectedMonthSecond])

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-blue-500">
        Estadísticas
      </h1>
      <div className="mb-4 mt-3 flex flex-wrap justify-center gap-1">
        {offersByYears &&
          Object.keys(offersByYears).map((year) => (
            <button
              onClick={() => selectYear(year)}
              key={year}
              className={`rounded p-1 px-2 transition-colors duration-300
                  ${
                    year === selectedYear
                      ? 'bg-blue-500 text-gray-200 hover:bg-blue-700'
                      : 'border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-gray-200'
                  }`}
            >
              {year}
            </button>
          ))}
      </div>

      <div className="flex flex-wrap justify-center gap-1">
        {[selectedMonthFirst, selectedMonthSecond].map(
          (selectedMonth, index) => (
            <div
              key={index}
              className="w-[48%] min-w-[650px] rounded-xl border border-blue-500 p-1"
            >
              <div className="m-3 flex flex-wrap justify-center gap-2">
                {monthsFromYears &&
                  monthsFromYears.map((month) => (
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
