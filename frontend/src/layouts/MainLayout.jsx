// layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Navabar from '../components/Navabar'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  return (

    <div className='grid grid-rows-[45px_1fr] h-full w-full bg-zinc-100'>
       <nav className="w-full h-full">
        <Navabar />
      </nav>

      <main className="w-full h-full">
        <Outlet />        
      </main>
      
    </div>


  )
}
