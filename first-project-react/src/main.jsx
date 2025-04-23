import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VariablesApp } from './VariablesApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VariablesApp
      title='Anthony Tamayo Ortega'
      subtitle='Web Developer'
    />
  </StrictMode>,
)
