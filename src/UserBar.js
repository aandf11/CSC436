//import React from 'react'
import React, {useContext} from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from './Contexts'

export default function UserBar() {
    //const user = ''

    const {state} = useContext(StateContext)   
    
    if (state.user) {
       // return <Logout user={user} />
       return <Logout  />
    } else {
        return (
        <>
        {/* <Login />
        If You Are New User:
        <Register /> */}
         <Login  />
        If You Are New User:
        <Register />
        </>
        )
    }
}