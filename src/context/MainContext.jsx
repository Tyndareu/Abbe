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
  const [isLoading, setLoading] = useState(true)
  const [showOffer, setShowOffer] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [showEmbroiderers, setShowEmbroiderers] = useState(false)
  const [showMaterial, setShowMaterial] = useState(false)
  const [offerManagementNav, setOfferManagementNav] = useState()
  const [statistics, setStatistics] = useState(false)
  const [newOffer, setNewOffer] = useState(false)
  const [gestionNav, setGestionNav] = useState(
    departmentList.GestionNav.endOffers
  )
  const [stitches, setStitches] = useState(false)

  useEffect(() => {
    if (department === departmentList.Admin.home && offers.length > 0) {
      if (hasUnassignedOffer(offers)) {
        setUnassignedDepartment(true)
      } else {
        setUnassignedDepartment(false)
      }
    }
  }, [offers])

  const hasUnassignedOffer = (offers) => {
    return offers.some((offer) => {
      const departments = Object.values(offer.department)
      return departments.every((dept) => !dept)
    })
  }

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
        isLoading,
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
        statistics,
        setStatistics,
        gestionNav,
        setGestionNav,
        newOffer,
        setNewOffer,
        stitches,
        setStitches
      }}
    >
      {children}
    </mainContext.Provider>
  )
}
