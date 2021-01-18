import React,{ useState, useEffect} from "react";
import {authenticate} from '../store/actions/auth';
import { useSelector, useDispatch, connect } from 'react-redux'
import axios from 'axios'
import Header from './Header'
import Posts from './Posts/Posts'

const Home = (props) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    if(props.loggedInStatus === 'NOT_LOGGED_IN'){
      props.history.push("/login")
    }
    else{
      axios.get('http://localhost:3000/api/v1/posts').then(response => {
        if(response.data){
          setPosts(response.data)
        }
      })
    }
  }, [])
  
  return (
    <div>
      <Header {...props}/>
      <Posts posts={posts}/>
    </div>
  );
};

export default Home;
