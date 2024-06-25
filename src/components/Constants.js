import moment from 'moment'

export const embroiderers = [
  'Sin Asignar',
  'Z1 GR',
  'Z1 PQ',
  'Z4',
  'Z10',
  'Tajima 2',
  'Tajima 8'
]
export const ghostUsers = ['flmatamoros@gmail.com', 'surimagenmerida@gmail.com']
export const userRoles = {
  admin: [
    'flmatamoros@gmail.com',
    'surimagenmerida@gmail.com',

    'abbealmacen@gmail.com',
    'abbebordado@gmail.com',
    'abbecomercial@gmail.com',
    'abbegestion@gmail.com',
    'abbeguillermo@gmail.com',
    'abbepicaje@gmail.com',
    'abbepreparacion@gmail.com',
    'abbeproyectos@gmail.com'
  ],
  user: []
}
export const usersRolesList = {
  admin: 'Admin',
  user: 'User',
  guest: 'guest'
}

export const pickingAssignments = {
  unassigned: 'Sin Asignar',
  pablo: 'Pablo',
  noe: 'Noe'
}

export const salesPeopleList = [
  'Guillermo',
  'Miguel Sr',
  'Virginia',
  'Pepi',
  'Miguel',
  'Toni',
  'Otros'
]

export const limitItems = 75

export const today = moment().format('DD/MM/YYYY')

export const textRed = {
  color: 'red',
  fontSize: '1.2rem'
}

export const offerType = {
  All: 'Todas',
  Exterior: 'Exterior',
  Embroidery: 'Bordado',
  Stock: 'Stock',
  unassigned: 'Sin Asignar'
}
export const offerTypeColor = {
  Exterior: { color: 'bg-yellow-500/70 text-white', name: 'Exterior' },
  Embroidery: { color: 'bg-blue-500/70 text-white', name: 'Bordado' },
  Stock: { color: 'bg-orange-500/70 text-white', name: 'Stock' }
}
export const departmentList = {
  Admin: {
    home: 'Inicio',
    picaje: 'Picaje',
    stamping: 'Estampación',
    preparation: 'Preparación',
    embroideries: 'Bordados',
    confection: 'Confección',
    warehouse: 'Almacén'
  },
  User: {
    preparation: 'Preparación',
    embroideries: 'Bordados',
    confection: 'Confección',
    warehouse: 'Almacén'
  },
  OfferTypes: {
    home: 'Inicio',
    preparation: 'Preparación',
    confection: 'Confección',
    warehouse: 'Almacén'
  },
  GestionNav: {
    endOffers: 'Finalizadas',
    deletedOffers: 'Eliminadas',
    statistics: 'Estadísticas'
  }
}
export const offerTypeDepartment = [
  departmentList.Admin.preparation,
  departmentList.Admin.confection,
  departmentList.Admin.warehouse,
  departmentList.Admin.home
]
export const dateEndColor = {
  twoDays: {
    name: 'Dos Días',
    color: 'bg-red-800/80'
  },
  oneWeek: {
    name: 'Una Semana',
    color: 'bg-yellow-800/80'
  },
  twoWeeks: {
    name: 'Dos Semanas',
    color: 'bg-green-800/80'
  },
  moreThanTwoWeeks: {
    name: 'Más de dos Semanas',
    color: 'bg-blue-800/80'
  }
}

export const completedDateColor = {
  before: 'bg-red-800/80',
  same: 'bg-green-800/80',
  after: 'bg-blue-800/80'
}

export const initialOfferValues = {
  offerNumber: '',
  client: '',
  clientNumber: '',
  salesPerson: salesPeopleList.at(-1),
  offerDate: today,
  deliveryDate: '',
  fixedDeliveryDate: false,
  preparationDays: 0,
  picker: pickingAssignments.unassigned,
  offerDetails: '',
  offerDetailsExtended: '',
  offerType: offerType.unassigned,
  status: 'active',
  embroidery: embroiderers[0],
  lastModificationDate: [],
  department: {
    picaje: false,
    stamping: false,
    embroideries: false,
    preparation: false,
    confection: false,
    warehouse: false
  }
}
