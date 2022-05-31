import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Products from './Products'
import Product from './Product'

const AllRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products" element={<Products/>}>
                {/* <Route path=":id" element={<Product/>} /> */}
            </Route>
            <Route path="products/:id" element={<Product/>} />
        </Routes>
    </>
  )
}

export default AllRoutes