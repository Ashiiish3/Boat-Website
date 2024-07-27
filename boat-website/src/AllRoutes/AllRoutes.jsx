import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Collection from '../Pages/Collection'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Collection' element={<Collection />} ></Route>
    </Routes>
  )
}