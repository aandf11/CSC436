// import logo from './logo.svg';
// import './App.css';
import UserBar from './UserBar'
import {useState, useReducer, useEffect} from 'react'
import { useResource } from 'react-request-hook'
import{mount, route} from 'navi';
import {Router, View} from 'react-navi';
//import Todo from './Todo'
import React from 'react'
import CreateTodo from './CreateTodo'
import TodoPage from './pages/TodoPage'
import TodoList from './TodoList'
import Header from './Header'
import {ThemeContext,StateContext} from './Contexts'
import ChangeTheme from './ChangeTheme'
import appReducer from './reducers'
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UserPage';
import ProfilePage from './pages/ProfilePage';
import { Container } from 'react-bootstrap';
//export const ThemeContext = React.createContext({primary: 'blue'})

function App() {

  // const timeElapsed = Date.now();
  // const today = new Date(timeElapsed);

  //const [user, setUser] = useState('')
 // const [ user, dispatchUser ] = useReducer(userReducer, '')



  // const initialTodos =[
  //   {
  //     title: "buy eggs",
  //     description:"go to buy some eggs",
  //     dateCreated: today.toUTCString(),
  //     complete: false,
  //     dateCompleted: today.toUTCString(),
  //     id: Math.random()
  //   },    {
  //     title: "clean house",
  //     description:"clean my house",
  //     dateCreated: today.toUTCString(),
  //     complete: false,
  //     dateCompleted: today.toUTCString(),
  //     id: Math.random()
  //   },    {
  //     title: "pick up son",
  //     description:"pick up son form school ",
  //     dateCreated: today.toUTCString(),
  //     complete: false,
  //     dateCompleted: today.toUTCString(),
  //     id: Math.random()
  //   },
  // ]

//   const [ todos, getTodos ] = useResource(() => ({
//     url: '/todos',
//     method: 'get'
// }))

const [state, dispatch] =useReducer(appReducer,{user: {}, todos: [], users: []})

// useEffect(getTodos, [])

// useEffect(() => {
//     if (todos && todos.data) {
//         dispatch({ type: 'FETCH_TODOS', todos: todos.data })
//     }
// }, [todos])


 // const [todos, setTodos] = useState(initialTodos)
  //const [todos,dispatchTodo] = useReducer(postReducer, initialTodos)
  
 
  const {user} = state


  const [theme,setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
 })

  // function userReducer (state, action) {
  //   switch (action.type) {
  //     case 'LOGIN':
  //     case 'REGISTER':
  //       return action.username
  //       case 'LOGOUT':
  //         return ''
  //         default:
  //           return state
  //         }
  //       }


  // function postReducer (state, action) {
  //   switch (action.type) {
  //     case 'CREATE_TODO':
  //       const newPost = {
  //          title: action.title,
  //          description: action.description,
  //          //content: action.content,
  //          dateCreated:today.toUTCString(),
  //          complete: false,
  //          dateCompleted: '',
  //          id: Math.random()
  //          }
  //          return [ newPost, ...state ]

  //          case 'TOGGLE_TODO':

  //           return state.map((todo) =>todo.id === action.id ? {  ...todo, complete:
  //              !todo.complete, dateCompleted: action.dComplete,}: todo);
          

  //          case 'DELETE_TODO':
  //            return state.filter(todo => todo.id  !== action.id);


  //          default:
  //            return state
  //           }
  //         }      
  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/users': route({ view: <UsersPage />}),
    '/users/:id': route(req => {
      return { view: <ProfilePage id={req.params.id} /> }
    }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
})


  return(
    <div>
  <ThemeContext.Provider value={theme}>
    <StateContext.Provider value = {{state: state, dispatch: dispatch }}>
    <Router routes={routes}>
      <Container>
                <HeaderBar setTheme={setTheme} />
                <hr />
                <View/>
      </Container>
 </Router>
    </StateContext.Provider>
    </ThemeContext.Provider>
  </div>
  )
}

export default App;
