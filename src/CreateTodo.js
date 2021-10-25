import React, {useState,useContext,useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setContent ] = useState('')
    //const {dispatch} = useContext(StateContext)

    const {state, dispatch} = useContext(StateContext)
    const {user} = state;


    const [todo , createTodo ] = useResource(({ title, description }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description}
    }))


    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleContent (evt) { setContent(evt.target.value) }


    
    function handleCreate () {
        createTodo({ title, description})

    }

    useEffect(() => {
        if (todo && todo.data && todo.isLoading === false) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description,id:todo.data.id})

        }
 }, [todo])



    // function handleCreate () {     
    //     const newTodo = { title, content, author: user }
    //     setTodos([ newTodo, ...todos ])}

    return (<form onSubmit={e => {e.preventDefault(); handleCreate();}}
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