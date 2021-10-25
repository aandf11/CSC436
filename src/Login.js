//import React from 'react'
import React, { useContext, useState, useEffect} from 'react'

import { StateContext } from './Contexts'

import { useResource } from 'react-request-hook'

export default function Login() {

    const {dispatch} = useContext(StateContext)

    const [username, setUsername] = useState('')

    const [ loginFailed, setLoginFailed ] = useState(false)
    const [ password, setPassword ] = useState('')


    function handleUsername (evt){setUsername(evt.target.value)}
    function handlePassword (evt) { setPassword(evt.target.value)}

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({ type: 'LOGIN', username: user.data[0].username })
} else {
                setLoginFailed(true)
}
} 
}, [user])



    return (
    <form onSubmit={e => {e.preventDefault(); login(username, password) }}>
        <label htmlFor="login-username">Username:</label>
        <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
        <label htmlFor="login-password">Password:</label>
        <input type="password" name="login-password" value={password} onChange={handlePassword} id="login-password" />
        <input type="submit" value="Login" disabled={username.length === 0} />
        {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}

        </form>
        )
    }