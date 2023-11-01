import moment from 'moment'
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

export function getUniqueMonths(offers) {
  const months = ['00']

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
  const result = offers.filter((offer) => {
    return !offer.completedDate
  })
  return result.filter((offer) => {
    return !offer.deletedDate
  }).length
}

export function completedOffers(offers) {
  return offers.filter((offer) => {
    return offer.completedDate
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
    completedBeforeDeadline: 0
  }
  for (const offer of endOffers) {
    if (offer.completedDate !== '') {
      moment(offer.deliveryDate).isBefore(offer.completedDate, 'day')
        ? offersInTime.completedAfterDeadline++
        : moment(offer.completedDate).isSame(offer.deliveryDate, 'day')
        ? offersInTime.completedOnTime++
        : moment(offer.deliveryDate).isAfter(offer.completedDate, 'day') &&
          offersInTime.completedBeforeDeadline++
    }
  }
  return offersInTime
}

export const charAtOpcions = {
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
  colors: ['#2196f3', '#55dfc0', '#fcd53f', '#186fcb', '#2c8259', '#a53e51'],
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
        { title: 'Totales', cols: 1 },
        { title: 'Control de Ofertas', cols: 2 },
        { title: 'Control de plazos', cols: 3 }
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
