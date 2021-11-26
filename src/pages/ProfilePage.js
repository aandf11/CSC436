import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'
import { StateContext } from '../Contexts';

export default function ProfilePage({id}) {

    console.log(id)
    const {state, dispatch} = useContext(StateContext)
    const {user} = state
    const [ todos, getTodos ] = useResource(() => ({
        url: `/user/${id}`,
        method: 'get'//,
        //headers: {'Authorization': `${user.access_token}`}
    }))

    useEffect(() => { getTodos() }, [])

    useEffect(() => {
        if (todos && todos.isLoading === false && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos })
        }
    }, [todos])

    return (
        <TodoList />
    )
}