import moment from 'moment'
import { offerType, salesPeopleList } from '../../components/Constants'

export const months = {
  '00': 'Todos',
  '01': 'Enero',
  '02': 'Febrero',
  '03': 'Marzo',
  '04': 'Abril',
  '05': 'Mayo',
  '06': 'Junio',
  '07': 'Julio',
  '08': 'Agosto',
  '09': 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre'
}

export function filterByYear(offers) {
  const years = {}

  offers.forEach((offer) => {
    const year = offer.offerDate.split('/')[2]

    if (!years[year]) {
      years[year] = []
    }

    years[year].push(offer)
  })

  return years
}

export function filterOffersByMonth(offers) {
  const monthlyOffers = { '00': [] }

  offers.forEach((offer) => {
    const month = offer.offerDate.split('/')[1]

    if (!monthlyOffers[month]) {
      monthlyOffers[month] = []
    }

    monthlyOffers[month].push(offer)
  })
  return monthlyOffers
}

export function filterOffersByMonthEnd(offers) {
  const monthlyOffers = { '00': [] }
  offers.forEach((offer) => {
    const month = offer.deliveryDate.split('-')[1]
    if (!monthlyOffers[month]) {
      monthlyOffers[month] = []
    }
    monthlyOffers[month].push(offer)
  })
  return monthlyOffers
}

export const calculateAverageDays = (totalDays, totalOffers) => {
  return totalDays > 0 ? Math.round(totalDays / totalOffers) : 0
}

export function newMonthsFromYears(offersByYear) {
  if (offersByYear)
    return Object.keys(filterOffersByMonth(offersByYear)).sort((a, b) => a - b)
}

export function getDataFromOffers(offers) {
  const dataToCompare = {
    totalOffers: 0,
    completedOffers: 0,
    openOffers: 0,
    beforeDeliveryDate: 0,
    onDeliveryDate: 0,
    afterDeliveryDate: 0
  }

  const dataDays = {
    totalDays: 0,
    totalOffers: 0,
    exteriorTotalDays: 0,
    exteriorTotalOffers: 0,
    stockTotalDays: 0,
    stockTotalOffers: 0,
    embroideryTotalDays: 0,
    embroideryTotalOffers: 0
  }

  const salesPerson = {}

  salesPeopleList.forEach((element) => {
    salesPerson[element] = 0
  })

  offers.forEach((offer) => {
    if (offer.deletedDate) {
      return
    }

    if (offer.completedDate) {
      const createdDate = offer.offerDate.split('/').reverse().join('-')
      const days = moment(offer.completedDate).diff(moment(createdDate), 'days')

      if (days) {
        dataDays.totalDays += days
        dataDays.totalOffers++
      }

      dataToCompare.completedOffers++

      if (moment(offer.deliveryDate).isBefore(offer.completedDate, 'day')) {
        dataToCompare.afterDeliveryDate++
      } else if (
        moment(offer.deliveryDate).isSame(offer.completedDate, 'day')
      ) {
        dataToCompare.onDeliveryDate++
      } else {
        dataToCompare.beforeDeliveryDate++
      }

      switch (offer.offerType) {
        case offerType.Exterior:
          dataDays.exteriorTotalDays += days
          dataDays.exteriorTotalOffers++
          break
        case offerType.Stock:
          dataDays.stockTotalDays += days
          dataDays.stockTotalOffers++
          break
        case offerType.Embroidery:
          dataDays.embroideryTotalDays += days
          dataDays.embroideryTotalOffers++
          break
        default:
          break
      }
    } else {
      dataToCompare.openOffers++
    }
    switch (offer.salesPerson) {
      case salesPeopleList[0]:
        salesPerson[salesPeopleList[0]]++
        break
      case salesPeopleList[1]:
        salesPerson[salesPeopleList[1]]++
        break
      case salesPeopleList[2]:
        salesPerson[salesPeopleList[2]]++
        break
      case salesPeopleList[3]:
        salesPerson[salesPeopleList[3]]++
        break
      case salesPeopleList[4]:
        salesPerson[salesPeopleList[4]]++
        break
      default:
        salesPerson[salesPeopleList[5]]++
        break
    }
  })

  return { dataToCompare, dataDays, salesPerson }
}
export async function updateSeriesData({
  monthlyOffers,
  offersByYears,
  selectedMonth,
  monthlyOffersEnd,
  selectedYear,
  setSeries,
  setSeriesDays,
  setSeriesSalesPerson
}) {
  if (
    !monthlyOffers ||
    !monthlyOffersEnd ||
    !offersByYears ||
    !selectedMonth ||
    !selectedYear
  ) {
    return
  }

  const filteredOffers =
    selectedMonth === '00'
      ? offersByYears[selectedYear]
      : monthlyOffers[selectedMonth]
  const filteredOffersEnd =
    selectedMonth === '00'
      ? offersByYears[selectedYear]
      : monthlyOffersEnd[selectedMonth]

  const nonDeletedOffers = filteredOffers.filter((offer) => !offer.deletedDate)

  const nonDeletedOffersEnd = filteredOffersEnd.filter(
    (offer) => !offer.deletedDate
  ).length

  const { dataToCompare, dataDays, salesPerson } =
    getDataFromOffers(nonDeletedOffers)

  const offerSeriesData = [
    nonDeletedOffers.length,
    nonDeletedOffersEnd,
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
      dataDays.embroideryTotalDays,
      dataDays.embroideryTotalOffers
    ),
    calculateAverageDays(dataDays.stockTotalDays, dataDays.stockTotalOffers)
  ]

  setSeries([{ name: 'Ofertas', data: offerSeriesData }])
  setSeriesDays([{ name: 'Days', data: daysSeriesData }])
  setSeriesSalesPerson([
    { name: 'Sales Person', data: Object.values(salesPerson) }
  ])
}
export const charAtOffers = {
  chart: {
    background: '#222528',
    foreColor: '#2196f3',
    height: 250,
    id: 'JjcCT',
    toolbar: {
      show: false
    },
    type: 'bar',
    width: 400
  },
  colors: [
    '#61f42a',
    '#2196f3',
    '#55dfc0',
    '#fcd53f',
    '#186fcb',
    '#2c8259',
    '#a53e51'
  ],
  // title: {
  //   text: 'Todas las Ofertas',
  //   align: 'center'
  // },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 5,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    },
    treemap: {
      dataLabels: {
        format: 'scale'
      }
    },
    radialBar: {
      hollow: {
        background: '#fff'
      }
    }
  },

  dataLabels: {
    enabled: true,
    offsetY: -20,
    style: {
      colors: ['#fff']
    },
    dropShadow: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true
    }
  },
  xaxis: {
    labels: {
      show: true
    },
    position: 'bottom',
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    categories: [
      'Creadas',
      'Finalizan',
      'Finalizadas',
      'Sin Finalizar',
      'Antes de plazo',
      'En plazo',
      'Fuera de plazo'
    ],
    group: {
      style: {
        fontSize: '15px',
        fontWeight: 700
      },
      groups: [
        { title: 'Totales', cols: 2 },
        { title: 'Control de Ofertas', cols: 2 },
        { title: 'Finalizadas: Control de plazos ', cols: 3 }
      ]
    }
  },
  stroke: {
    width: 2,
    colors: ['#fff']
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: true
    }
  },
  legend: {
    show: false
  },
  grid: {
    borderColor: '#121212',
    padding: {
      right: 25,
      left: 15
    }
  }
}

export const charAtDays = {
  chart: {
    background: '#222528',
    foreColor: '#2196f3',
    height: 250,
    id: 'JjcCT26',
    toolbar: {
      show: false
    },
    type: 'bar',
    width: 400
  },
  colors: ['#2196f3', '#bdb034', '#2174b7', '#bc750b'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 5,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    },
    treemap: {
      dataLabels: {
        format: 'scale'
      }
    },
    radialBar: {
      hollow: {
        background: '#fff'
      }
    }
  },

  dataLabels: {
    enabled: true,
    offsetY: -20,
    style: {
      colors: ['#fff']
    },
    dropShadow: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true
    }
  },
  xaxis: {
    labels: {
      show: true
    },
    position: 'bottom',
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    categories: ['Todas', 'Exterior', 'Bordado', 'Stock'],
    group: {
      style: {
        fontSize: '15px',
        fontWeight: 700
      },
      groups: [
        { title: 'Totales', cols: 1 },
        { title: 'Tipo de Ofertas', cols: 3 }
      ]
    }
  },
  stroke: {
    width: 2,
    colors: ['#fff']
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: true
    }
  },
  legend: {
    show: false
  },
  grid: {
    borderColor: '#121212',
    padding: {
      right: 25,
      left: 15
    }
  }
}

export const charAtSalesPerson = {
  chart: {
    background: '#222528',
    foreColor: '#2196f3',
    height: 250,
    id: 'JjcCT26',
    toolbar: {
      show: false
    },
    type: 'bar',
    width: 400
  },
  colors: ['#d9ceff', '#bea6ff', '#9f75ff', '#843dff', '#7916ff', '#6b04fd'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 5,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    },
    treemap: {
      dataLabels: {
        format: 'scale'
      }
    },
    radialBar: {
      hollow: {
        background: '#fff'
      }
    }
  },

  dataLabels: {
    enabled: true,
    offsetY: -20,
    style: {
      colors: ['#fff']
    },
    dropShadow: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true
    }
  },
  xaxis: {
    labels: {
      show: true
    },
    position: 'bottom',
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    categories: salesPeopleList,
    group: {
      style: {
        fontSize: '15px',
        fontWeight: 700
      }
    }
  },
  stroke: {
    width: 2,
    colors: ['#fff']
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: true
    }
  },
  legend: {
    show: false
  },
  grid: {
    borderColor: '#121212',
    padding: {
      right: 25,
      left: 15
    }
  }
}
