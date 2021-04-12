import React,{ useState, useEffect} from "react";
import {authenticate} from '../../store/actions/auth';
import { useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import Header from '../Header/Header'
import Posts from '../Posts/Posts'

const Home = (props) => {
  const [posts, setPosts] = useState([])
  const loggedInStatus = useSelector(state => state.auth.loggedInStatus)

  useEffect(() => {
      axios.get('http://localhost:3000/api/v1/posts').then(response => {
        if(response.data){
          console.log(response.data)
          setPosts(response.data)
        }
      })
  }, [])
  
  return (
      <Posts posts={posts}/>
  );
};

export default Home;
