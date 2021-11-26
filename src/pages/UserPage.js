import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'
import UserList from '../UserList'

export default function UsersPage () {

    const {state, dispatch} = useContext(StateContext)

    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        method: 'get',
    }))

    useEffect(() => {
        getUsers()
    }, []) 

    useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            console.log(users.data)
            dispatch({ type: 'FETCH_USERS', users: users.data })
        }
    }, [users])

    //console.log(users.data)

    return(
        <>
            <h2>Users</h2>
            {users && <UserList />}
        </>
    )
}