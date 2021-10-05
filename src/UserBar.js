//import React from 'react'
import React, {useState} from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({user,dispatch}) {
    //const user = ''

    if (user) {
       // return <Logout user={user} />
       return <Logout user={user} dispatch={dispatch} />
    } else {
        return (
        <>
        {/* <Login />
        If You Are New User:
        <Register /> */}
         <Login dispatch={dispatch} />
        If You Are New User:
        <Register dispatch={dispatch} />
        </>
        )
    }
}