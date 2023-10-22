// toggleSwitchPicker.test.js

import { describe, it, vi, expect } from 'vitest'
import {
  toggleSwitch,
  toggleSwitchPicker,
  handleDropdown
} from './HandleFunctions'

describe('toggleSwitch', () => {
  it('should toggle the value of the specified property in the values object', () => {
    const propName = 'property'
    const values = { property: false }
    const setValues = vi.fn()

    toggleSwitch(propName, values, setValues)

    expect(setValues).toHaveBeenCalledWith({ ...values, [propName]: true })
  })
})

describe('toggleSwitchPicker', () => {
  it('should update picker value in values', () => {
    const values = {
      picker: 'original'
    }
    const newPicker = 'updated'
    const setValues = vi.fn()

    toggleSwitchPicker(newPicker, values, setValues)

    expect(setValues).toHaveBeenCalledWith({
      ...values,
      picker: newPicker
    })
  })

  it('should not modify values object if pickerName is undefined', () => {
    const values = { picker: '' }
    const setValues = vi.fn()

    toggleSwitchPicker(undefined, values, setValues)

    expect(setValues).not.toHaveBeenCalled()
  })

  it('should handle empty values object', () => {
    const values = {}
    const pickerName = 'newPicker'
    const setValues = vi.fn()

    toggleSwitchPicker(pickerName, values, setValues)

    expect(setValues).toHaveBeenCalledWith({
      ...values,
      picker: pickerName
    })
  })
})

describe('handleDropdown', () => {
  it('should update the values object with the selected dropdown value', () => {
    const e = {
      target: {
        value: 'selectedValue'
      }
    }
    const keyDropdown = 'dropdown'
    const values = {
      dropdown: 'initialValue'
    }
    const setValues = vi.fn()

    handleDropdown(e, keyDropdown, values, setValues)

    expect(setValues).toHaveBeenCalledWith({
      ...values,
      [keyDropdown]: e.target.value
    })
  })
})
