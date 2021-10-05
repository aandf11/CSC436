// import logo from './logo.svg';
// import './App.css';
import UserBar from './UserBar'
import {useState, useReducer} from 'react'
import Todo from './Todo'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'



function App() {

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  //const [user, setUser] = useState('')
  const [ user, dispatchUser ] = useReducer(userReducer, '')

  const initialTodos =[
    {
      title: "buy eggs",
      description:"go to buy some eggs",
      dateCreated: today.toUTCString(),
      complete: false,
      dateCompleted: today.toUTCString(),
      id: Math.random()
    },    {
      title: "clean house",
      description:"clean my house",
      dateCreated: today.toUTCString(),
      complete: false,
      dateCompleted: today.toUTCString(),
      id: Math.random()
    },    {
      title: "pick up son",
      description:"pick up son form school ",
      dateCreated: today.toUTCString(),
      complete: false,
      dateCompleted: today.toUTCString(),
      id: Math.random()
    },
  ]

 // const [todos, setTodos] = useState(initialTodos)
  const [todos,dispatchTodo] = useReducer(postReducer, initialTodos)


  function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
        case 'LOGOUT':
          return ''
          default:
            return state
          }
        }


  function postReducer (state, action) {
    switch (action.type) {
      case 'CREATE_TODO':
        const newPost = {
           title: action.title,
           description: action.description,
           //content: action.content,
           dateCreated:today.toUTCString(),
           complete: false,
           dateCompleted: '',
           id: Math.random()
           }
           return [ newPost, ...state ]

           case 'TOGGLE_TODO':

            return state.map((todo) =>todo.id === action.id ? {  ...todo, complete:
               !todo.complete, dateCompleted: action.dComplete,}: todo);
          

           case 'DELETE_TODO':
             return state.filter(todo => todo.id  !== action.id);


           default:
             return state
            }
          }      


  return(
    <div>
      <UserBar user={user} dispatch={dispatchUser} />
    <br/><br/><hr/><br/>
    { user && <CreateTodo user = {user} todos={todos} dispatchTodo={dispatchTodo}/>}
    <br/><br/><hr/><br/>
    <TodoList todos={todos} dispatchTodo={dispatchTodo}/>

  </div>
  )
}

export default App;
