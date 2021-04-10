import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { authenticate } from '../../store/actions/auth';

const Header = (props) => {
    const dispatch = useDispatch()
    const loggedInStatus = useSelector(state => state.auth.loggedInStatus)

    const handleLogout = () => {
        axios
          .delete("http://localhost:3000/logout", { withCredentials: true })
          .then(response => {
            console.log(response.data)
            if(response.data.logged_out){
              dispatch(authenticate("NOT_LOGGED_IN", {}))
              props.history.push("/login")
            }else{
              throw new Error("Something Went Wrong!!")
            }
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
                  <Nav.Link href="/p/new">+Add Post</Nav.Link>
                </Nav>
                {loggedInStatus === 'LOGGED_IN' ? 
                  (<Nav> <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link> </Nav>) 
                  : (<Nav><Nav.Link href="#" onClick={() => {props.history.push('/login')}}>Login</Nav.Link>
                    <Nav.Link href="#" onClick={() => {props.history.push('/register')}}>Register</Nav.Link>
                  </Nav>)}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
