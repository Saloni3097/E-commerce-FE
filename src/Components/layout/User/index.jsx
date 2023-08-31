import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Home from '../../../Pages/Home/Home'
import { Outlet } from 'react-router-dom'
const index = () => {
  return (
    <div>
        <Header/>
        {/* <Home/> */}
        {/* <UserRouter/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default index