import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart/Cart.jsx'
import Home from '../pages/Home/Home.jsx'
import Login from '../pages/login/Login.jsx'
import Register from '../pages/login/Register.jsx'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default AllRoutes
