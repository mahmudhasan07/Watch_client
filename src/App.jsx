import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [bannerTime, setbannerTime] = useState(4.4);
  const location = useLocation()
  useEffect(() => {
    if (location.pathname == "/") {
      setbannerTime(4.4)
    }
    else {
      setbannerTime(1.2)
    }
  }, [location]);



  return (
    <section className=''>
      <div>
        <NavBar></NavBar>
      </div>
      <div className='pb-2'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  )
}

export default App
