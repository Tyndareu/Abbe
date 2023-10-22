export const toggleSwitch = (propName, values, setValues) => {
  setValues({
    ...values,
    [propName]: !values[propName]
  })
}
export const toggleSwitchPicker = (pickerName, values, setValues) => {
  if (pickerName !== undefined && pickerName !== null && pickerName !== '') {
    setValues({
      ...values,
      picker: pickerName
    })
  }
}
export const toggleSwitchDepartment = (departmentName, values, setValues) => {
  setValues({
    ...values,
    department: {
      ...values.department,
      [departmentName]: !values.department[departmentName]
    }
  })
}
export const handleDropdown = (e, keyDropdown, values, setValues) => {
  setValues({
    ...values,
    [keyDropdown]: e.target.value
  })
}
export const handleChange = (e, values, setValues) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
}
