import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Guestpage from './GuestPage/Guestpage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Guestpage/>
  </StrictMode>,
)
