// import { Router } from 'react-router-dom'
import Routers from '../Routes/Routes'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
  )
}

export default Layout