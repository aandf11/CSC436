import React, {useState,useContext,useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'
import { useNavigation } from 'react-navi'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setContent ] = useState('')
    //const {dispatch} = useContext(StateContext)
    const navigation = useNavigation()

    const {state, dispatch} = useContext(StateContext)
    const {user} = state;
    // const [todo , createTodo ] = useResource(({ title, description }) => ({
    //     url: '/todos',
    //     method: 'post',
    //     data: { title, description}
    // }))

    // const [todo , createTodo ] = useResource(({ title, description,dateCreated, complete, dateCompleted, author }) => ({
    //     url: '/todo',
    //     method: 'post',
    //     headers: {"Authorization": `${state.user.access_token}`},
    //     data: { title, description, dateCreated, complete, dateCompleted,author }
    // }))
 

        const [todo , createTodo ] = useResource(({ title, description, dateCreated, dateCompleted, author }) => ({
                url: '/todo',
                method: 'post',
                headers: {"Authorization": `${state.user.access_token}`},
                data: { title, description, dateCreated,dateCompleted, author }
            }))
        



    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleContent (evt) { setContent(evt.target.value) }


    
    // function handleCreate () {
    //     createTodo({ title, description})

    // }




    // const complete = false;
     const dateCreated = Date(Date.now())
     const dateCompleted = undefined
    // const dateCompleted = undefined
    //    function handleCreate () {
    //             createTodo({ title, description, dateCreated, complete, dateCompleted, author: user.username })
    //         }
        



        function handleCreate () {
                    createTodo({ title, description, dateCreated, dateCompleted, author: user.username })
                }
//     useEffect(() => {
//         if (todo && todo.data && todo.isLoading === false) {
//             dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description,id:todo.data.id})
//             navigation.navigate(`/todo/${todo.data.id}`)

//         }
//  }, [todo])


//      useEffect(() => {
//             if (todo && todo.data) {
//                 dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated : todo.data.dateCreated, complete : todo.data.complete, dateCompleted : todo.data.dateCompleted ,id: todo.data.id, author: user.username })
//                 console.log(todo.data)
//                 navigation.navigate(`/todo/${todo.data.id}`)
//             }
//         }, [todo])
    
        useEffect(() => {
                if (todo && todo.data) {
                    dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, dateCompleted: todo.data.dateCompleted, todoId: todo.data._id, author: user.username })
                    console.log(todo.data)
                    navigation.navigate(`/todo/${todo.data._id}`)
                }
            }, [todo])


    // function handleCreate () {     
    //     const newTodo = { title, content, author: user }
    //     setTodos([ newTodo, ...todos ])}

    return (<form onSubmit={e => {e.preventDefault(); handleCreate();}}
    ><div>Logged In User: <b>{user.username}</b></div>
    <div>
        <label htmlFor="create-title">Todo:</label>
        <input type="text" value= {title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        Description:<textarea value={description} onChange={handleContent}/>
        <input type="submit" value="Create" />
        </form>
            )
        }