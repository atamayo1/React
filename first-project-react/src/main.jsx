import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersApp } from './pages/UsersApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>,
)
