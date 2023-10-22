import {
  userRoles,
  usersRolesList,
  dateEndColor,
  completedDateColor,
  departmentList,
  offerType
} from './Constants'

export function capitalize(string) {
  const firstSpaces = string.match(/^\s*/)[0]

  const lastSpaces = string.match(/\s*$/)[0]

  string = string.trim()
  string = string ? string.charAt(0).toUpperCase() + string.slice(1) : ''

  return firstSpaces + string + lastSpaces
}

export function getRole(user) {
  if (userRoles.admin.includes(user)) return usersRolesList.admin
  else if (userRoles.user.includes(user)) return usersRolesList.user
  else return usersRolesList.guest
}

export const filteredOffers = ({
  offers,
  searchCustomerName,
  searchOfferNumber,
  picker,
  offerTypeFilter,
  salesPerson,
  unassignedDepartment
}) => {
  return offers.filter((offer) => {
    if (
      searchCustomerName &&
      !offer.client.toLowerCase().includes(searchCustomerName.toLowerCase())
    ) {
      return false
    }

    if (
      searchOfferNumber &&
      !offer.offerNumber.toLowerCase().includes(searchOfferNumber.toLowerCase())
    ) {
      return false
    }

    if (picker !== 'Tod@s' && offer.picker !== picker) {
      return false
    }

    if (offerTypeFilter !== 'Todas' && offer.offerType !== offerTypeFilter) {
      return false
    }
    if (salesPerson !== 'Tod@s' && offer.salesPerson !== salesPerson) {
      return false
    }
    if (unassignedDepartment) {
      const departments = Object.values(offer.department)
      const allFalse = departments.every((dept) => !dept)
      if (!allFalse) return false
    }
    return true
  })
}

export const getDateEndColor = (days) => {
  if (days < 2) {
    return dateEndColor.twoDays.color
  }
  if (days < 7) {
    return dateEndColor.oneWeek.color
  }
  if (days < 14) {
    return dateEndColor.twoWeeks.color
  }
  return dateEndColor.moreThanTwoWeeks.color
}

export const getCompletedDateColor = (isBefore) => {
  if (isBefore === 'before') {
    return completedDateColor.before
  }
  if (isBefore === 'same') {
    return completedDateColor.same
  }
  if (isBefore === 'after') {
    return completedDateColor.after
  }
}

const departmentsEmails = {
  picaje: ['abbepicaje@gmail.com'],
  stamping: [],
  preparation: ['abbepreparacion@gmail.com'],
  embroideries: ['abbebordado@gmail.com'],
  confection: [],
  warehouse: ['abbealmacen@gmail.com']
}

export function getDepartamentFromUser(user) {
  for (const department in departmentsEmails) {
    if (departmentsEmails[department].includes(user)) {
      return departmentList.Admin[department]
    }
  }

  return departmentList.Admin.home
}


export function isInitialState({searchOfferNumber,searchCustomerName, picker, offerTypeFilter, salesPerson, unassignedDepartment}) {
  return (
    searchOfferNumber === '' &&
    searchCustomerName === '' &&
    picker === 'Tod@s' &&
    offerTypeFilter === offerType.All &&
    salesPerson === 'Tod@s' &&
    unassignedDepartment === false
  );
}