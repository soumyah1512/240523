import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/home" element={
            <PrivateRoute>
                <Home/>
            </PrivateRoute>
        }/> */}
    </Routes>
    </>
  )
}

export default AllRoutes