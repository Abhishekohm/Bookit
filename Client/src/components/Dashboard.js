import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import SideBar_Header_Community from './SideBar_Header_Community'
import SideBar_Header_Faculty from './SideBar_Header_Faculty'
import CreateEventForm from './CreateEventForm'

const Dashboard = () => {
    const { auth } = useAuth();
    return (
        auth?.user ?
            (
                <>
                    {
                        auth.access == 101
                            ?
                            <SideBar_Header_Faculty />
                            :
                            <CreateEventForm />
                    }
                </>
            ) :
            <Navigate to="/dashboard" replace={true} />


    )
}

export default Dashboard