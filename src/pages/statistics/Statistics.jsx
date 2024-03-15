import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import backup from '../../json/backup.json'
import {
  charAtDays,
  charAtOffers,
  charAtSalesPerson,
  filterByYear,
  filterOffersByMonth,
  filterOffersByMonthEnd,
  months,
  newMonthsFromYears,
  updateSeriesData
} from './functions'

export default function Statistics({ year }) {
  const offers = Object.values(backup.__collections__.offers)
  const [offersByYears, setOffersByYears] = useState({})
  const [monthlyOffers, setMonthlyOffers] = useState({})
  const [monthlyOffersEnd, setMonthlyOffersEnd] = useState({})
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState()
  const [series, setSeries] = useState([])
  const [seriesDays, setSeriesDays] = useState([])
  const [seriesSalesPerson, setSeriesSalesPerson] = useState([])

  let monthsFromYears =
    offersByYears && newMonthsFromYears(offersByYears[selectedYear])

  useEffect(() => {
    setOffersByYears(filterByYear(offers))
  }, [])

  useEffect(() => {
    if (!offersByYears) return
    setSelectedMonth(monthsFromYears && monthsFromYears[0])
    if (offersByYears[selectedYear]) {
      setMonthlyOffers(filterOffersByMonth(offersByYears[selectedYear]))
      setMonthlyOffersEnd(filterOffersByMonthEnd(offersByYears[selectedYear]))
    }
  }, [offersByYears, selectedYear])

  const selectYear = async (year) => {
    setSelectedYear(year)
    setMonthlyOffers(filterOffersByMonth(offersByYears[year]))
    setMonthlyOffersEnd(filterOffersByMonthEnd(offersByYears[year]))
    monthsFromYears = newMonthsFromYears(offersByYears[year])
    setSelectedMonth(monthsFromYears && monthsFromYears[0])
  }

  useEffect(() => {
    updateSeriesData({
      selectedMonth,
      setSeries,
      setSeriesDays,
      setSeriesSalesPerson,
      monthlyOffers,
      monthlyOffersEnd,
      offersByYears,
      selectedYear
    })
  }, [selectedMonth, monthlyOffers])

  return (
    <div className="w-[48%] min-w-[650px] rounded-xl border border-blue-500 p-1">
      <div className="my-2 flex flex-wrap justify-center gap-3">
        {offersByYears &&
          Object.keys(offersByYears).map((year) => (
            <button
              onClick={() => selectYear(year)}
              key={year}
              className={`rounded p-1 px-2 transition-colors duration-300
                  ${
                    year === selectedYear
                      ? 'bg-orange-500 font-bold text-gray-900 hover:bg-orange-700'
                      : 'border border-orange-500 font-bold text-orange-500 hover:bg-orange-700 hover:text-gray-900'
                  }`}
            >
              {year}
            </button>
          ))}
      </div>

      <div className="m-2 flex flex-wrap justify-center gap-1">
        <div>
          {monthsFromYears && (
            <button
              onClick={() => setSelectedMonth(monthsFromYears[0])}
              className={`rounded p-1 px-2 transition-colors duration-300
                  ${
                    monthsFromYears[0] === selectedMonth
                      ? 'border border-green-900 bg-green-500 font-bold text-gray-900 hover:border-gray-500'
                      : 'border border-green-500 font-bold text-green-500 hover:bg-green-700 hover:text-gray-200'
                  }`}
            >
              {months[monthsFromYears[0]]}
            </button>
          )}
        </div>
        {monthsFromYears &&
          monthsFromYears.map(
            (month) =>
              month !== '00' && (
                <button
                  onClick={() => setSelectedMonth(month)}
                  className={`rounded p-1 transition-colors duration-300
                  ${
                    month === selectedMonth
                      ? 'bg-blue-500 text-gray-200 hover:bg-blue-700'
                      : 'border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-gray-200'
                  }`}
                  key={month}
                >
                  {months[month]}
                </button>
              )
          )}
      </div>
      <h2 className="text-center text-blue-500">
        Rendimiento de Ofertas y Control de Finalización
      </h2>

      <div>
        <Chart options={charAtOffers} series={series} type="bar" height={300} />
      </div>
      <h2 className="text-center text-blue-500">
        Días promedio desde la creación de la oferta hasta su finalización
      </h2>
      <div>
        <Chart
          options={charAtDays}
          series={seriesDays}
          type="bar"
          height={300}
        />
      </div>
      <h2 className="text-center text-blue-500">
        Total de ofertas por comercial
      </h2>
      <div>
        <Chart
          options={charAtSalesPerson}
          series={seriesSalesPerson}
          type="bar"
          height={300}
        />
      </div>
    </div>
  )
}
