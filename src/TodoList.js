import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos = []}) {
    return (
    <div>
        {todos.map((p, i) => <Todo {...p} title={'Todo ' + i + ' : ' + p.title } description={'Description: ' + p.description} complete={'Completed: '} dateCreated={'Date Created: ' + p.dateCreated} dateCompleted={'Date Completed: ' + p.dateCompleted} key={'todo-' + i} />)}
        </div>
         )
        }