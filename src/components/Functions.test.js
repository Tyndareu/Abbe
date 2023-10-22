import { expect, describe, it } from 'vitest'
import { capitalize, getRole, filteredOffers } from './Functions'

describe('capitalize', () => {
  it('should return an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('should capitalize the first letter of a string with leading spaces', () => {
    expect(capitalize(' hello')).toBe(' Hello')
  })

  it('should capitalize the first letter of a string with trailing spaces', () => {
    expect(capitalize('hello ')).toBe('Hello ')
  })

  it('should capitalize the first letter of a string with multiple spaces between words', () => {
    expect(capitalize('hello world')).toBe('Hello world')
  })
})

describe('getRole', () => {
  it('should return Admin when user is in admin list', () => {
    expect(getRole('flmatamoros@gmail.com')).toBe('Admin')
    expect(getRole('abbegestion@gmail.com')).toBe('Admin')
    expect(getRole('surimagenmerida@gmail.com')).toBe('Admin')
  })

  it('should return User when user is in user list', () => {
    expect(getRole('abbepreparacion@gmail.com')).toBe('User')
  })

  it('should return guest when user is not in any list', () => {
    expect(getRole('randomuser@gmail.com')).toBe('guest')
  })

  it('should return guest when user is null or undefined', () => {
    expect(getRole(null)).toBe('guest')
    expect(getRole(undefined)).toBe('guest')
  })

  it('should return guest when user is not a string', () => {
    expect(getRole(123)).toBe('guest')
    expect(getRole(true)).toBe('guest')
    expect(getRole([])).toBe('guest')
    expect(getRole({})).toBe('guest')
  })

  it('should return guest when user is an empty string', () => {
    expect(getRole('')).toBe('guest')
  })
})

describe('filteredOffers', () => {
  it('should return all offers when all filters are empty', () => {
    const offers = [
      {
        client: 'Client A',
        offerNumber: '123',
        picker: 'Picker A',
        offerType: 'Type A',
        salesPerson: 'Sales A'
      },
      {
        client: 'Client B',
        offerNumber: '456',
        picker: 'Picker B',
        offerType: 'Type B',
        salesPerson: 'Sales B'
      },
      {
        client: 'Client C',
        offerNumber: '789',
        picker: 'Picker C',
        offerType: 'Type C',
        salesPerson: 'Sales C'
      }
    ]
    const result = filteredOffers({
      offers,
      searchCustomerName: '',
      searchOfferNumber: '',
      picker: 'Tod@s',
      offerTypeFilter: 'Todas',
      salesPerson: 'Tod@s'
    })
    expect(result).toEqual(offers)
  })

  it('should return filtered offers based on searchCustomerName', () => {
    const offers = [
      {
        client: 'Client A',
        offerNumber: '123',
        picker: 'Picker A',
        offerType: 'Type A',
        salesPerson: 'Sales A'
      },
      {
        client: 'Client B',
        offerNumber: '456',
        picker: 'Picker B',
        offerType: 'Type B',
        salesPerson: 'Sales B'
      },
      {
        client: 'Client C',
        offerNumber: '789',
        picker: 'Picker C',
        offerType: 'Type C',
        salesPerson: 'Sales C'
      }
    ]
    const result = filteredOffers({
      offers,
      searchCustomerName: 'Client A',
      searchOfferNumber: '',
      picker: 'Tod@s',
      offerTypeFilter: 'Todas',
      salesPerson: 'Tod@s'
    })
    expect(result).toEqual([offers[0]])
  })

  it('should return filtered offers based on searchOfferNumber', () => {
    const offers = [
      {
        client: 'Client A',
        offerNumber: '123',
        picker: 'Picker A',
        offerType: 'Type A',
        salesPerson: 'Sales A'
      },
      {
        client: 'Client B',
        offerNumber: '456',
        picker: 'Picker B',
        offerType: 'Type B',
        salesPerson: 'Sales B'
      },
      {
        client: 'Client C',
        offerNumber: '789',
        picker: 'Picker C',
        offerType: 'Type C',
        salesPerson: 'Sales C'
      }
    ]
    const result = filteredOffers({
      offers,
      searchCustomerName: '',
      searchOfferNumber: '456',
      picker: 'Tod@s',
      offerTypeFilter: 'Todas',
      salesPerson: 'Tod@s'
    })
    expect(result).toEqual([offers[1]])
  })

  it('should return an empty array when offers is empty', () => {
    const offers = []
    const result = filteredOffers({
      offers,
      searchCustomerName: '',
      searchOfferNumber: '',
      picker: 'Tod@s',
      offerTypeFilter: 'Todas',
      salesPerson: 'Tod@s'
    })
    expect(result).toEqual([])
  })

  it('should return an empty array when searchCustomerName does not match any offer', () => {
    const offers = [
      {
        client: 'Client A',
        offerNumber: '123',
        picker: 'Picker A',
        offerType: 'Type A',
        salesPerson: 'Sales A'
      },
      {
        client: 'Client B',
        offerNumber: '456',
        picker: 'Picker B',
        offerType: 'Type B',
        salesPerson: 'Sales B'
      },
      {
        client: 'Client C',
        offerNumber: '789',
        picker: 'Picker C',
        offerType: 'Type C',
        salesPerson: 'Sales C'
      }
    ]
    const result = filteredOffers({
      offers,
      searchCustomerName: 'Client D',
      searchOfferNumber: '',
      picker: 'Tod@s',
      offerTypeFilter: 'Todas',
      salesPerson: 'Tod@s'
    })
    expect(result).toEqual([])
  })
})
