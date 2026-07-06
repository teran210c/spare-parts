import './App.css'
import Navbar from './components/Navabar'
import MainLayout from './layouts/MainLayout'
import Lines from './pages/Lines'
import Machines from './pages/Machines'

function App() {

  return (
    <>
      <MainLayout>
        <Lines />
        <Machines/>
      </MainLayout>
      
    </>
  )
}

export default App
