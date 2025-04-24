import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersApp } from './pages/UsersApp'
import './assets/css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>,
)
