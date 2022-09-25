import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Home = () => {
    // const token = useSelector((state) => state.auth.token)
    const tok = JSON.parse(localStorage.getItem('token'))
    
  return (
    <>
        {tok.token && <div>Home</div>}
        {!tok.token && <Navigate to='/'/>}
    </>
  )
}

export default Home