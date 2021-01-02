import React,{ useState, useEffect} from "react";
import {authenticate} from '../store/actions/auth';
import { useSelector, useDispatch, connect } from 'react-redux'
import axios from 'axios'
import Header from './Header'

const Home = (props) => {

  useEffect(() => {
    if(props.loggedInStatus === 'NOT_LOGGED_IN'){
      props.history.push("/login")
    }
  }, [])
  
  return (
    <div>
      <Header {...props}/>
    </div>
  );
};

export default Home;
