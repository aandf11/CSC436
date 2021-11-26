import React, {useContext} from 'react'
import { ThemeContext } from './Contexts'
import {Link} from 'react-navi'
import { Navbar } from 'react-bootstrap'
const Header = ({text}) => {
     const theme = useContext(ThemeContext)
    // return <h1 style={ { color: theme.primaryColor} }>{text}</h1>
   //  return <Link href="/"><h1 style={{color: theme.primaryColor}}>{text}</h1></Link>
     return <Link href="/"><Navbar.Brand style={{color: theme.primaryColor}}>{text}</Navbar.Brand></Link>

}

export default Header 
