import { departmentList, limitItems } from './Constants'
import { klona } from 'klona/json'
import { getOffers, COLLECTION_NAME } from '../firebase/Api'
import moment from 'moment'
import { db } from '../firebase/Config'
// Firebase
import {
  collection,
  where,
  query,
  limit,
  startAfter,
  orderBy
} from 'firebase/firestore'

const departmentQueries = {
  [departmentList.Admin.picaje]: query(
    collection(db, COLLECTION_NAME),
    where('department.picaje', '==', true)
  ),
  [departmentList.Admin.embroideries]: query(
    collection(db, COLLECTION_NAME),
    where('department.embroideries', '==', true)
  ),
  [departmentList.Admin.preparation]: query(
    collection(db, COLLECTION_NAME),
    where('department.preparation', '==', true)
  ),
  [departmentList.Admin.confection]: query(
    collection(db, COLLECTION_NAME),
    where('department.confection', '==', true)
  ),
  [departmentList.Admin.stamping]: query(
    collection(db, COLLECTION_NAME),
    where('department.stamping', '==', true)
  ),
  [departmentList.Admin.warehouse]: query(
    collection(db, COLLECTION_NAME),
    where('department.warehouse', '==', true)
  ),
  [departmentList.GestionNav.endOffers]: query(
    collection(db, COLLECTION_NAME),
    where('completedDate', '!=', null),
    orderBy('completedDate', 'desc'),
    limit(limitItems)
  ),
  [departmentList.GestionNav.deletedOffers]: query(
    collection(db, COLLECTION_NAME),
    where('deletedDate', '!=', null),
    orderBy('deletedDate', 'desc'),
    limit(limitItems)
  ),
  default: query(
    collection(db, COLLECTION_NAME),
    where('status', '==', 'active')
  )
}

export const fetchOffers = async ({
  department,
  setOffers,
  setLastUpdate,
  setLoading,
  setAllOffers,
  setLastDocument
}) => {
  setLoading(true)
  try {
    const query = departmentQueries[department] || departmentQueries.default
    const querySnapshot = await getOffers(query)
    setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
    setLastUpdate(moment().format('HH:mm'))
    const docs = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()

      let preparationDate = data.deliveryDate
      let newDate = false

      if (data.preparationDays && data.preparationDays !== 0) {
        preparationDate = moment(data.deliveryDate)
          .subtract(data.preparationDays, 'days')
          .format('YYYY-MM-DD')
      }
      if (department === departmentList.Admin.home) {
        const formattedOfferDate = moment(data.offerDate, 'DD/MM/YYYY').format(
          'YYYY-MM-DD'
        )
        const today = moment().format('YYYY-MM-DD')
        const daysDifference = moment(today).diff(formattedOfferDate, 'days')
        daysDifference > 1 ? (newDate = false) : (newDate = true)
      }

      docs.push({
        ...data,
        id: doc.id,
        preparationDate,
        newDate
      })
    })

    if (department === departmentList.Admin.warehouse) {
      setAllOffers(klona(docs))
      setOffers(
        docs
          .filter((x) => x.department.warehouse === true)
          .sort((x, y) => moment(x.deliveryDate).diff(moment(y.deliveryDate)))
      )
    } else if (
      department === departmentList.GestionNav.endOffers ||
      department === departmentList.GestionNav.deletedOffers
    ) {
      setOffers(
        docs.sort((x, y) => {
          return department === departmentList.GestionNav.deletedOffers
            ? moment(y.deletedDate).diff(moment(x.deletedDate))
            : moment(y.completedDate).diff(moment(x.completedDate))
        })
      )
    } else {
      setOffers(
        docs.sort((x, y) =>
          moment(x.preparationDate).diff(moment(y.preparationDate))
        )
      )
    }
  } catch (error) {
    console.error(error)
  }
  setLoading(false)
}

export const nextPage = async ({
  department,
  setOffers,
  setLastUpdate,
  setLoading,
  lastDocument,
  setLastDocument
}) => {
  setLoading(true)
  try {
    const q =
      departmentList.GestionNav.endOffers === department
        ? query(
            collection(db, COLLECTION_NAME),
            where('completedDate', '!=', ''),
            orderBy('completedDate', 'desc'),
            startAfter(lastDocument),
            limit(limitItems)
          )
        : query(
            collection(db, COLLECTION_NAME),
            where('deletedDate', '!=', ''),
            orderBy('deletedDate', 'desc'),
            startAfter(lastDocument),
            limit(limitItems)
          )

    const querySnapshot = await getOffers(q)
    setLastUpdate(moment().format('HH:mm'))
    setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])

    const newDocs = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))

    setOffers((prevPedidos) => [...prevPedidos, ...newDocs])
  } catch (error) {
    console.error(error)
  }
  setLoading(false)
}
