import React,{useState, useContext, useEffect} from 'react'
import TodoList from './TodoList';
import {Link} from 'react-navi'
import {Card, Button} from 'react-bootstrap'
import { useResource } from 'react-request-hook';
import { ThemeContext , StateContext} from './Contexts';

function Todo ({ title, description, dateCreated, complete, dateCompleted, _id, short=false}) {

  const {state, dispatch} = useContext(StateContext)
  const {user} = state

const [todoToDel , deleteTodo ] = useResource(({_id}) => ({
    url: `/todos/${_id}`,
    method: 'delete',
    headers: { "Authorization": `${user.access_token}`}
}))


const [updateTodos , updateTodo ] = useResource(({_id, complete, dateCompleted}) => ({
  url: `/todos/${_id}`,
  method: 'patch',
  headers: { "Authorization": `${user.access_token}`},
  data: {complete, dateCompleted}
}))

let processedDescription = description
if (short) {
  if (description.length > 30) {
    processedDescription = description.substring(0, 30) + '...'
  }
}



const handleCompleted = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  let dComplete = `${date} ${time}`;
  if (complete === true) {
    dComplete = null;
  }
  updateTodo({id: _id, complete: !complete, dateCompleted: dComplete});
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
  dispatch({type: 'TOGGLE_TODO', _id, dComplete})
}

// function handleDelete(){
//   dispatch({type: 'DELETE_TODO', id})
// }

const handleDelete = () => {
  // console.log(id);
  // deleteTodo({id: id});
  // dispatch({type:'DELETE_TODO', id});
  deleteTodo()
}

useEffect(() => {
  if (todoToDel && todoToDel.isLoading === false && todoToDel.data) {
      dispatch({type: "DELETE_TODO", todoId: _id})
  }
}, [todoToDel])


const {secondaryColor} =  useContext(ThemeContext)
//const {dispatch} = useContext(StateContext)



    return (
    // <div>
    //      <Link href={`/todo/${id}`}><h3 style={{color: secondaryColor}}>{title}</h3></Link>
    //     <div>Description: {processedDescription}</div>
    //     <br />
    //     <div>Date Created: {dateCreated}</div>
    //     <br/>
    //     <div>Have you completed: {complete}<label><input type="checkbox" value ={complete} onChange={handleCompleted} />Yes Or No?</label>
    //     </div>
    //     <div>
    //     <br/>
    //     <button onClick={handleDelete}>Delete</button>
    //     </div>
    //     <br/>
    //     <div>Date Completed: {dateCompleted}</div>
    //     {short &&
    //             <div>
    //                 <br />
    //                 <Link href={`/todo/${id}`}>View full todo</Link>
    //             </div>
    //         }

    //     {/* <i>Written by <b>{author}</b></i> */}
    //     </div>  


<Card>
<Card.Body>
<Link href={`/todo/${_id}`}><h3 style={{color: secondaryColor}}>{title}</h3></Link>
    <Card.Title><input type="checkbox" checked={dateCompleted} onChange={handleCompleted} /> Have you completed?</Card.Title>
    <Card.Text>Description: {processedDescription}</Card.Text>
    <p>Date created: {dateCreated}</p>
    {dateCompleted && <label>Date completed: {new Date(dateCompleted).toLocaleDateString('en-us')}</label>}
    {dateCompleted && <br/>}
    <Button onClick={handleDelete}>Delete</Button>
    <br/><br/>
</Card.Body>
</Card>
              )
            }

            export default React.memo(Todo)
