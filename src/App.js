// import logo from './logo.svg';
// import './App.css';
import UserBar from './UserBar'

import Todo from './Todo'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'



function App() {

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);


  const todos =[
    {
      title: "buy eggs",
      description:"go to buy some eggs",
      dateCreated: today.toUTCString(),
      dateCompleted: today.toUTCString()
    },    {
      title: "clean house",
      description:"clean my house",
      dateCreated: today.toUTCString(),
      dateCompleted: today.toUTCString()
    },    {
      title: "pick up son",
      description:"pick up son form school ",
      dateCreated: today.toUTCString(),
      dateCompleted: today.toUTCString()
    },
  ]


  return(
    <div>
      <UserBar/>
    <br/><br/><hr/><br/>
    <CreateTodo user="Kai" />
    <br/><br/><hr/><br/>
    <TodoList todos={todos}/>

  </div>
  )
}

export default App;
