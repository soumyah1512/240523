import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const token = useSelector((state) => state.auth.token)
    const location = useLocation()
    
    console.log(isAuth)
    console.log(token);

    if (isAuth === true) return children
    return <Navigate to="/" state={{from: location}} replace/>
}

export default PrivateRoute