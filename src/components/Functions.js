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
    const customerNameMatch =
      !searchCustomerName ||
      offer.client.toLowerCase().includes(searchCustomerName.toLowerCase())

    const offerNumberMatch =
      !searchOfferNumber ||
      offer.offerNumber.toLowerCase().includes(searchOfferNumber.toLowerCase())

    const pickerMatch = picker === 'Tod@s' || offer.picker === picker

    const offerTypeMatch =
      offerTypeFilter === 'Todas' || offer.offerType === offerTypeFilter

    const salesPersonMatch =
      salesPerson === 'Tod@s' || offer.salesPerson === salesPerson

    const departmentMatch =
      !unassignedDepartment ||
      Object.values(offer.department).every((dept) => !dept)

    return (
      customerNameMatch &&
      offerNumberMatch &&
      pickerMatch &&
      offerTypeMatch &&
      salesPersonMatch &&
      departmentMatch
    )
  })
}

export const getDateEndColor = (days) =>
  days < 2
    ? dateEndColor.twoDays.color
    : days < 7
    ? dateEndColor.oneWeek.color
    : days < 14
    ? dateEndColor.twoWeeks.color
    : dateEndColor.moreThanTwoWeeks.color

export const getCompletedDateColor = (isBefore) =>
  isBefore === 'before'
    ? completedDateColor.before
    : isBefore === 'same'
    ? completedDateColor.same
    : isBefore === 'after' && completedDateColor.after

const departmentsEmails = {
  picaje: ['abbepicaje@gmail.com'],
  stamping: [],
  preparation: ['abbepreparacion@gmail.com'],
  embroideries: ['abbebordado@gmail.com'],
  confection: [],
  warehouse: ['abbealmacen@gmail.com']
}

export function getDepartmentFromUser(user) {
  const departmentEntry = Object.entries(departmentsEmails).find(
    ([department, emails]) => emails.includes(user)
  )

  if (departmentEntry) {
    const [department] = departmentEntry
    return departmentList.Admin[department]
  }
  return departmentList.Admin.home
}

export function isInitialState({
  searchOfferNumber,
  searchCustomerName,
  picker,
  offerTypeFilter,
  salesPerson,
  unassignedDepartment
}) {
  return (
    searchOfferNumber === '' &&
    searchCustomerName === '' &&
    picker === 'Tod@s' &&
    offerTypeFilter === offerType.All &&
    salesPerson === 'Tod@s' &&
    !unassignedDepartment
  )
}
