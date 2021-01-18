import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from 'axios'

const Header = (props) => {

    const handleLogout = () => {
        axios
          .delete("http://localhost:3000/logout", { withCredentials: true })
          .then(response => {
            props.handleLogout();
            props.history.push("/login")
          })
          .catch(error => {
            console.log("logout error", error);
          });
      }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">SYT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/p">Gallery</Nav.Link>
                  <Nav.Link href="/explore">Posts</Nav.Link>
                </Nav>
                {props.loggedInStatus === 'LOGGED_IN' ? 
                  (<Nav> <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link> </Nav>) 
                  : (<Nav><Nav.Link href="#" onClick={() => {props.history.push('/login')}}>Login</Nav.Link>
                    <Nav.Link href="#" onClick={() => {props.history.push('/register')}}>Register</Nav.Link>
                  </Nav>)}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
