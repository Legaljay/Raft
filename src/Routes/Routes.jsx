import {Routes, Route} from 'react-router-dom'
import ContentLayout from '../components/contentLayout'
import Login from '../components/Login'
import {Signup} from '../components/Signup'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<ContentLayout/>}/>
        <Route path='/home' element={<ContentLayout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers