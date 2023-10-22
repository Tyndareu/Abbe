// Firebase imports
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Abbe Pruebas
const firebaseConfig = {
  apiKey: 'AIzaSyB65HxqG-tfnQPQBv1b-FAAtG9vfeZdRn4',
  authDomain: 'abbe-pruebas.firebaseapp.com',
  projectId: 'abbe-pruebas',
  storageBucket: 'abbe-pruebas.appspot.com',
  messagingSenderId: '454647563798',
  appId: '1:454647563798:web:57711722a5398b20241737',
  measurementId: 'G-1LZ9NFFRHV'
}
// Firebase configuration

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore
export const db = getFirestore()

// Authentication
export const Auth = getAuth(app)
