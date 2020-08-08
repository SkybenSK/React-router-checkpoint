import React from 'react'
import { Redirect } from 'react-router-dom'

const Admin = ({authed}) => {
    return (
        ({authed}) ? <h3>Welcome Admin</h3> : <Redirect to="/Login"/>
    )
}

export default Admin;
