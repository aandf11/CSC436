//import React from 'react'
import React,{useState} from 'react'

export default function Register({dispatch}) {


    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })



    // const [ username, setUsername ] = useState('')
    // const [ password, setPassword ] = useState('')
    // const [ passwordRepeat, setPasswordRepeat ] = useState('')
    // function handleUsername (evt) { setUsername(evt.target.value) }
    // function handlePassword (evt) { setPassword(evt.target.value) }
    // function handlePasswordRepeat (evt) { setPasswordRepeat(evt.target.value) }


    return (
    <form onSubmit={e => {e.preventDefault(); dispatch({type: 'REGISTER' , username: formData.username, password:formData.password, passwordRepeat: formData.passwordRepeat})}}
    ><label htmlFor="register-username">Username:</label>
    <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} name="register-username" id="register-username" />

    <label htmlFor="register-password">Password:</label>
    <input type="password" name="register-password" id="register-password" value={formData.password} onChange={e=>setFormData({...formData,password: e.target.value})} />
    
    <label htmlFor="register-password-repeat">Repeat password:</label>
    <input type="password" name="register-password-repeat" id="register-password-repeat" value={formData.passwordRepeat} onChange={e=>setFormData({...formData,passwordRepeat: e.target.value})}/>
    <input type="submit" value="Register" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat} />
    </form>
    )
}