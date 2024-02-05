// utils.js
import {
  calculateAverageDays,
  filterOffers,
  getDataFromOffers,
  totalCreates
} from './functions'

export async function updateSeriesData(
  selectedMonth,
  offers,
  monthsFromYears,
  setSeries,
  setSeriesDays
) {
  const filteredOffers = await filterOffers(
    selectedMonth,
    offers,
    monthsFromYears
  )
  const nonDeletedOffers = offers.filter((offer) => !offer.deletedDate)

  const totalOffersCreated = totalCreates({
    nonDeletedOffers,
    selectedMonth
  })

  const { dataToCompare, dataDays } = getDataFromOffers(filteredOffers)

  const offerSeriesData = [
    totalOffersCreated,
    dataToCompare.totalOffers,
    dataToCompare.completedOffers,
    dataToCompare.openOffers,
    dataToCompare.beforeDeliveryDate,
    dataToCompare.onDeliveryDate,
    dataToCompare.afterDeliveryDate
  ]

  const daysSeriesData = [
    calculateAverageDays(dataDays.totalDays, dataDays.totalOffers),
    calculateAverageDays(
      dataDays.exteriorTotalDays,
      dataDays.exteriorTotalOffers
    ),
    calculateAverageDays(
      dataDays.emborideryTotalDays,
      dataDays.emborideryTotalOffers
    ),
    calculateAverageDays(dataDays.stockTotalDays, dataDays.stockTotalOffers)
  ]

  setSeries([{ name: 'Ofertas', data: offerSeriesData }])
  setSeriesDays([{ name: 'Days', data: daysSeriesData }])
}
