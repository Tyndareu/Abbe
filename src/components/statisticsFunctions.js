import moment from 'moment'
export const months = {
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

export function getUniqueMonths(offers) {
  const months = []

  offers.forEach((offer) => {
    let month = offer.offerDate.split('/')[1]
    if (month.length === 1) {
      month = '0' + month
    }
    if (!months.includes(month)) {
      months.push(month)
    }
  })

  return months.sort((a, b) => a - b)
}

export function openOffers(offers) {
  return offers.filter((offer) => {
    return offer.completedDate === ''
  }).length
}

export function completedOffers(offers) {
  return offers.filter((offer) => {
    return offer.completedDate !== ''
  }).length
}

export function deletedOffers(offers) {
  return offers.filter((offer) => {
    return offer.deletedDate
  }).length
}

export function compareDates(endOffers) {
  const offersInTime = {
    completedOnTime: 0,
    completedAfterDeadline: 0,
    completedBeforeDeadline: 0,
    nulls: 0
  }
  for (const offer of endOffers) {
    if (offer.completedDate !== '') {
      moment(offer.deliveryDate).isBefore(offer.completedDate, 'day')
        ? offersInTime.completedAfterDeadline++
        : moment(offer.completedDate).isSame(offer.deliveryDate, 'day')
        ? offersInTime.completedOnTime++
        : moment(offer.deliveryDate).isAfter(offer.completedDate, 'day')
        ? offersInTime.completedBeforeDeadline++
        : offersInTime.nulls++
    }
  }
  return offersInTime
}

export const charAtOpcions = {
  chart: {
    animations: {
      enabled: false,
      easing: 'swing'
    },
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
    '#2196f3',
    '#fcd53f',
    '#d4526e',
    '#55dfc0',
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
      borderRadiusWhenStacked: 'last'
    },
    bubble: {
      zScaling: true
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
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    categories: [
      'Total',
      'Abiertas',
      'Borradas ',
      'Finalizadas ',
      'Antes del plazo',
      'En plazo',
      'Fuera de plazo'
    ]
  },
  stroke: {
    width: 1,
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
  }
}
