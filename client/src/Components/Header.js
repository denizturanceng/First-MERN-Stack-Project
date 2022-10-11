import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Header = ({user, setUser}) => {
    return (
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="/" className='text-dark'>ToDo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {
            user ? <Button onClick={(e)=>{
              localStorage.removeItem("user");
              setUser(null);
            }} size='md' variant='dark' href='/'>Log out</Button>:
            <Button size='md' variant='dark' href='/registeration'>Registeration</Button>
          }
        </Container>
      </Navbar>
    );
  }
  
  export default Header;