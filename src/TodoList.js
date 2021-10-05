import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos, dispatchTodo}) {
    return (
    <div>
        {todos.map((p, i) => <Todo  key={'todo-' + i} {...p} title={p.title} description={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} id={p.id} dispatchTodo={dispatchTodo} />)}
        </div>
         )
        }