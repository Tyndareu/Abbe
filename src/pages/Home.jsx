// React
import { useEffect, useCallback, useMemo } from 'react'
// Firebase
import { Auth } from '../firebase/Api'
import { useAuthState } from 'react-firebase-hooks/auth'
import BackGround from '../img/bg.jpg'
// Components
import Nav from './Nav'
import Welcome from './Welcome'
import Loading from '../components/Loading'
import Table from './table/Table'
import UnauthorizedUser from './UnauthorizedUser'
import Filters from './table/Filters'
import UpdateOffers from '../components/UpdateOffers'
import Stitches from './stitches/Stitches'
// import Footer from './Footer'
// Constants
import {
  offerType,
  usersRolesList,
  departmentList
} from '../components/Constants'
// Functions
import {
  getRole,
  filteredOffers,
  getDepartmentFromUser
} from '../components/Functions'

// Custom hooks
import { fetchOffers } from '../components/FetchOffers'
import { useMainContext } from '../context/MainContext'
import Statistics from './statistics/Statistics'

function Home() {
  const [user, loading] = useAuthState(Auth)
  const {
    offers,
    department,
    setDepartment,
    userRole,
    setUserRole,
    setOffers,
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
    setLastUpdate,
    lastDocument,
    setLastDocument,
    unassignedDepartment,
    setUnassignedDepartment,
    statistics,
    newOffer,
    setNewOffer,
    stitches
  } = useMainContext()

  // Filters
  const clearFilters = useCallback(() => {
    setSearchOfferNumber('')
    setSearchCustomerName('')
    setPicker('Tod@s')
    setOfferTypeFilter(offerType.All)
    setSalesPerson('Tod@s')
    setUnassignedDepartment(false)
    setNewOffer(false)
  }, [
    searchOfferNumber,
    searchCustomerName,
    picker,
    offerTypeFilter,
    salesPerson,
    newOffer
  ])

  const offerList = useMemo(() => {
    return filteredOffers({
      offers,
      searchCustomerName,
      searchOfferNumber,
      picker,
      offerTypeFilter,
      salesPerson,
      unassignedDepartment,
      newOffer
    })
  }, [
    offers,
    searchCustomerName,
    searchOfferNumber,
    picker,
    offerTypeFilter,
    salesPerson,
    unassignedDepartment,
    newOffer
  ])
  // Filters End

  useEffect(() => {
    if (user) {
      setUserRole(getRole(user.email))
      if (userRole !== usersRolesList.guest) {
        if (userRole === usersRolesList.user) {
          setDepartment(departmentList.User.preparation)
        } else {
          setDepartment(getDepartmentFromUser(user.email))
        }
      }
    }
  }, [user])

  useEffect(() => {
    clearFilters()
    if (
      user !== null &&
      department !== 'stitches' &&
      department !== departmentList.GestionNav.statistics
    ) {
      fetchOffers({
        department,
        setOffers,
        setLastUpdate,
        setLoading,
        setAllOffers,
        lastDocument,
        setLastDocument
      })
    }
  }, [department])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl text-blue-500">
        <Loading />
      </div>
    )
  }

  if (user === null) {
    return <Welcome />
  } else if (userRole === usersRolesList.guest) {
    return <UnauthorizedUser />
  }

  if (isLoading) {
    return (
      <>
        <span className="fixed top-14 z-10 p-2 text-xs text-blue-500">
          {user.email}
        </span>
        <Nav />
        <div className="flex flex-wrap justify-between gap-y-4 p-3">
          <Filters clearFilters={clearFilters} />
          <UpdateOffers
            clearFilters={clearFilters}
            totalOffers={offerList.length}
          />
        </div>
        <Loading />
      </>
    )
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackGround})`,
          zIndex: 10,
          top: 0,
          position: 'sticky'
        }}
      >
        <Nav />
        {!statistics && !stitches && (
          <div className="flex flex-wrap justify-between gap-y-4 p-3">
            <Filters clearFilters={clearFilters} />
            <UpdateOffers
              clearFilters={clearFilters}
              totalOffers={offerList.length}
            />
          </div>
        )}
      </div>
      {!statistics && !stitches && (
        <>
          <Table offers={offerList} />
          <span className="fixed top-14 z-10 p-2 text-xs text-blue-500">
            {user.email}
          </span>
        </>
      )}
      {stitches && <Stitches />}
      <div className="flex flex-wrap gap-2">
        {statistics && <Statistics year={'2023'} />}
        {statistics && <Statistics year={'2024'} />}
      </div>
    </>
  )
}

export default Home
