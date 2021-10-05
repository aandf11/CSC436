import React, {useState} from 'react'


export default function CreateTodo ({user, dispatchTodo}) {

    const [ title, setTitle ] = useState('')
    const [ description, setContent ] = useState('')


    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleContent (evt) { setContent(evt.target.value) }
    // function handleCreate () {     
    //     const newTodo = { title, content, author: user }
    //     setTodos([ newTodo, ...todos ])}

    return (<form onSubmit={e => {e.preventDefault(); dispatchTodo({type: 'CREATE_TODO', title, description, author: user})}}
    ><div>Logged In User: <b>{user}</b></div>
    <div>
        <label htmlFor="create-title">Todo:</label>
        <input type="text" value= {title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        Description:<textarea value={description} onChange={handleContent}/>
        <input type="submit" value="Create" />
        </form>
            )
        }