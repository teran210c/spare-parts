// layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Navabar from '../components/Navabar'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  return (

    <div className='flex flex-col h-screen w-screen flex-col overflow-hidden bg-neutral-100'>
       <nav className="h-1/12">
        <Navabar />
      </nav>

      <main className="flex-1 min-h-0 w-full flex flex-col overflow-hidden">
        <Outlet />        
      </main>
      
    </div>


  )
}
