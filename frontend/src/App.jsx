import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Lines from './pages/Lines.jsx'
import Machines from './pages/Machines.jsx'
import MachineDetails from './pages/MachineDetails.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Lines />} />
          <Route path="line/:lineId" element={<Machines />} />
          <Route path="line/:lineId/:machineId" element={<MachineDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
