
import React, { useEffect, useContext } from 'react'
import { useResource} from 'react-request-hook'
import {Link} from 'react-navi'
import Todo from '../Todo'
import { StateContext } from '../Contexts'

export default function TodoPage ({ _id }) {

    const {state} = useContext(StateContext)

    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${_id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    useEffect(getTodo, [_id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <hr/>
    <div><Link href="/">Go back</Link></div>
        </div>
    )
}
