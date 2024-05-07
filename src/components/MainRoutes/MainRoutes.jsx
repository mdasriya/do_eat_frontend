import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Dishes from '../dishes_new/Dishes'
// import Search from '../../pages/Search/Search'
import SignIn from '../SignIn/SignIn'
import SignUp from '../Signup/SignUp'
import Cart from '../../pages/Cart/Cart'
import PlaceOrder from '../../pages/PlaceOrder/PlaceOrder'
import Contact from '../../pages/contact/Contact'

const MainRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Dishes />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
       
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} /> 
    </Routes>
  )
}

export default MainRoutes
