import React, { useContext } from 'react'
import Todo from './Todo'

import { StateContext } from './Contexts'

export default function TodoList () {

    const {state} =useContext(StateContext)
    const{todos} = state;

    return (
    <div>
        {todos.map((p, i) => <Todo  key={'todo-' + i} {...p} title={p.title} description={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} id={p.id} />)}
        </div>
         )
        }