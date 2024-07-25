import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
    </Routes>
  )
}