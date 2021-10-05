import React,{useState} from 'react'
import TodoList from './TodoList';
export default function Todo ({ title, description, dateCreated, complete, dateCompleted, id, dispatchTodo}) {

function handleComplete(){
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  let dComplete = `${date} ${time}`;
  if (complete) dComplete = ''
  dispatchTodo({type: 'TOGGLE_TODO', id, dComplete})
}

function handleDelete(){
  dispatchTodo({type: 'DELETE_TODO', id})
}
    return (
    <div>
        <h3>Todo: {title}</h3>
        <div>Description: {description}</div>
        <br />
        <div>Date Created: {dateCreated}</div>
        <br/>
        <div>Have you completed: {complete}<label><input type="checkbox" value ={complete} onChange={handleComplete} />Yes Or No?</label>
        </div>
        <div>
        <br/>
        <button onClick={handleDelete}>Delete</button>
        </div>
        <br/>
        <div>Date Completed: {dateCompleted}</div>
        {/* <i>Written by <b>{author}</b></i> */}
        </div>  
              )
            }