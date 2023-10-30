// React
import { useState, useContext, createContext, useEffect } from 'react'
// Components & Constants
import { offerType, departmentList } from '../components/Constants'
// Context
const mainContext = createContext()

// Custom hook to access the main context
export const useMainContext = () => {
  const context = useContext(mainContext)
  if (!context) throw new Error('There is no mainContext provider')
  return context
}

export function MainProvider({ children }) {
  const [userRole, setUserRole] = useState('')
  const [department, setDepartment] = useState('')

  const [offers, setOffers] = useState([])
  const [allOffers, setAllOffers] = useState([])
  const [lastDocument, setLastDocument] = useState(null)

  const [searchOfferNumber, setSearchOfferNumber] = useState('')
  const [searchCustomerName, setSearchCustomerName] = useState('')
  const [picker, setPicker] = useState('Tod@s')
  const [offerTypeFilter, setOfferTypeFilter] = useState(offerType.All)
  const [salesPerson, setSalesPerson] = useState('Tod@s')
  const [unassignedDepartment, setUnassignedDepartment] = useState(false)
  const [departmentButton, setDepartmentButton] = useState(false)

  const [loading, setLoading] = useState(true)

  const [showOffer, setShowOffer] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState(null)

  const [lastUpdate, setLastUpdate] = useState(null)

  const [showEmbroiderers, setShowEmbroiderers] = useState(false)
  const [showMaterial, setShowMaterial] = useState(false)

  const [offerManagementNav, setOfferManagementNav] = useState()

  const hasUnassignedOffer = (offers) => {
    return offers.some((offer) => {
      const departments = Object.values(offer.department)
      return departments.every((dept) => !dept)
    })
  }
  useEffect(() => {
    if (department === departmentList.Admin.home) {
      if (offers.length > 0) {
        if (hasUnassignedOffer(offers)) {
          setDepartmentButton(true)
          setUnassignedDepartment(true)
        } else {
          setDepartmentButton(false)
        }
      }
    } else {
      setUnassignedDepartment(false)
    }
  }, [offers, department])

  return (
    <mainContext.Provider
      value={{
        department,
        setDepartment,
        userRole,
        setUserRole,
        offers,
        setOffers,
        allOffers,
        setAllOffers,
        searchOfferNumber,
        setSearchOfferNumber,
        searchCustomerName,
        setSearchCustomerName,
        picker,
        setPicker,
        offerTypeFilter,
        setOfferTypeFilter,
        salesPerson,
        setSalesPerson,
        loading,
        setLoading,
        showOffer,
        setShowOffer,
        selectedOffer,
        setSelectedOffer,
        lastUpdate,
        setLastUpdate,
        showEmbroiderers,
        setShowEmbroiderers,
        showMaterial,
        setShowMaterial,
        offerManagementNav,
        setOfferManagementNav,
        lastDocument,
        setLastDocument,
        unassignedDepartment,
        setUnassignedDepartment,
        departmentButton
      }}
    >
      {children}
    </mainContext.Provider>
  )
}
