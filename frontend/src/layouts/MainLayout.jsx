// layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Navabar from '../components/Navabar'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  return (
    // Pantalla completa estricta, evita scrolls raros en el body
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-50">
      
      {/* Navbar arriba fija (h-16 = 64px) */}
      <header className="h-16 w-full bg-gray-800 text-white flex-shrink-0">
        <Navabar />
      </header>

      {/* Contenedor inferior: resta el alto de la navbar */}
      <div className="flex flex-1 h-[calc(100vh-4rem)] w-full overflow-hidden">
        

        {/* El contenedor principal de tus páginas con scroll propio si el contenido crece */}
        <main className="flex-1 h-full overflow-y-auto p-6">
          {/* Outlet renderiza dinámicamente Lines, Machines, o MachineDetails */}
          <Outlet /> 
        </main>

      </div>
    </div>
  )
}
