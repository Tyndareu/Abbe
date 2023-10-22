// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Context
import { MainProvider } from './context/MainContext'
// Components
import Home from './pages/Home'
// UI
import { Toaster } from 'sonner'
// Styles
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
      <Toaster position="top-center" duration={2000} />
      <Home />
    </MainProvider>
  </React.StrictMode>
)
