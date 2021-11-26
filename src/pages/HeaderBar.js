import React, { useContext } from 'react'
import CreateTodo from '../CreateTodo'
//import TodoList from '../TodoList'
import {Link} from 'react-navi'
import Header from '../Header'
import {ThemeContext,StateContext} from '../Contexts'
import ChangeTheme from '../ChangeTheme'
import UserBar from '../UserBar'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default function HeaderBar ({setTheme }) {

    const {state} = useContext(StateContext)
    const theme = useContext(ThemeContext)
   // const {theme} = state;
    const {user} =state;

return (
<>


    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><Header text="My Todo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.username && <Nav.Link><Link href="/todo/create">Create New Todo</Link></Nav.Link>}
            {/* <ChangeTheme theme={theme} setTheme={setTheme} /> */}
          </Nav>
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
)
}
