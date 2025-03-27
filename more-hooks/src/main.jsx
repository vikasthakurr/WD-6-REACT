import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseMemo from './UseMemo.jsx' 
import UseCallback from './UseCallback.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseMemo />
    {/* <UseCallback /> */}
  </StrictMode>,
)
