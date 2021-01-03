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
            <Navbar.Brand href="#home">SYT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                {props.loggedInStatus === 'LOGGED_IN' ? (<Nav> <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link> </Nav>) : (<Nav><Nav.Link href="#" onClick={() => {props.history.push('/login')}}>Login</Nav.Link> <Nav.Link href="#" onClick={() => {props.history.push('/register')}}>Register</Nav.Link></Nav>)}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
