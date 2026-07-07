import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Machines from './pages/Machines.jsx'
import Lines from './pages/Lines.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import MachineDetails from './pages/MachineDetails.jsx'
import '@fontsource/inter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Lines />} />
          <Route path="line/:lineId" element={<Machines />} />
          <Route path="line/:lineId/:machine" element={<MachineDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
