// Firebase imports
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

import { getStorage } from 'firebase/storage'

// Other imports
import { db, app } from './Config'
import { toast } from 'sonner'

// Constants
export const COLLECTION_NAME = 'offers'

// Firestore functions
export const saveOffer = (newOrder) => {
  return addDoc(collection(db, COLLECTION_NAME), newOrder)
}

export const updateOffer = (id, updatedFields) => {
  return updateDoc(doc(db, COLLECTION_NAME, id), updatedFields)
}

export const getOffers = (query) => {
  return getDocs(query)
}

export const deleteOffer = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id))
    toast.success('Order deleted!')
  } catch (error) {
    toast.error('Error deleting order, please try again')
  }
}

export const getOffer = (id) => {
  return getDoc(doc(db, COLLECTION_NAME, id))
}

// Auth functions
export const Auth = getAuth(app)

export const signInWithGoogle = async () => {
  try {
    signInWithPopup(Auth, new GoogleAuthProvider())
  } catch (error) {
    toast.error('Error al iniciar sesión, por favor inténtalo de nuevo')
  }
}

export const signOutUser = () => {
  return signOut(Auth)
}
// Storage
export const storage = getStorage()
