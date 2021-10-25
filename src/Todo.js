import React,{useState, useContext, useEffect} from 'react'
import TodoList from './TodoList';
import { useResource } from 'react-request-hook';
import { ThemeContext , StateContext} from './Contexts';

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, id}) {

const [todo , deleteTodo ] = useResource(({id}) => ({
    url: `/todos/${id}`,
    method: 'delete',
}))


const [updateTodos , updateTodo ] = useResource(({id, complete, dateCompleted}) => ({
  url: `/todos/${id}`,
  method: 'patch',
  data: {complete, dateCompleted}
}))


const handleCompleted = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  let dComplete = `${date} ${time}`;
  if (complete === true) {
    dComplete = null;
  }
  updateTodo({id: id, complete: !complete, dateCompleted: dComplete});
}

useEffect(() => {
  if (updateTodos && updateTodos.data) {
    dispatch({type: 'TOGGLE_TODO', id: updateTodos.data.id, complete: updateTodos.data.complete, dateCompleted: updateTodos.data.dateCompleted})
  }
}, [updateTodos])


// const [toggleTodo, toggleTodoFunction] = useResource(
//   (id, updatedComplete, updateDateCompleted) => ({
//     url:  `/todos/${id}`,
//     method: "patch",
//     data: {
//       completed: updatedComplete,
//       dateCompleted: updateDateCompleted,
//     },
//   })
// );


// useEffect(() => {
//   if (toggleTodo && toggleTodo.isLoading === false && toggleTodo.data) {
//     dispatch({
//       type: "TOGGLE_TODO",
//       id,
//       dateCompleted: toggleTodo.data.dateCompleted,
//       completed: toggleTodo.data.completed,
//     });
//   }
// }, [toggleTodo]);



function handleComplete(){
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  let dComplete = `${date} ${time}`;
  if (complete) dComplete = ''
  dispatch({type: 'TOGGLE_TODO', id, dComplete})
}

// function handleDelete(){
//   dispatch({type: 'DELETE_TODO', id})
// }

const handleDelete = () => {
  console.log(id);
  deleteTodo({id: id});
  dispatch({type:'DELETE_TODO', id});
}


const {secondaryColor} =  useContext(ThemeContext)
const {dispatch} = useContext(StateContext)



    return (
    <div>
        <h3 style={{ color: secondaryColor }}>Todo: {title}</h3>
        <div>Description: {description}</div>
        <br />
        <div>Date Created: {dateCreated}</div>
        <br/>
        <div>Have you completed: {complete}<label><input type="checkbox" value ={complete} onChange={handleCompleted} />Yes Or No?</label>
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