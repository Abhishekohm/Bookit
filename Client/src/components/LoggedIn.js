import React from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom'


const LoggedIn = () => {
    const { auth } = useAuth();
    return (
        auth?.user
            ? <Navigate to={'/protected'} />
            : <Outlet />
    )
}

export default LoggedIn