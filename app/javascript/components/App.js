import React,{ useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Home from './Home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import NewPost from './Posts/NewPost'
import {authenticate} from '../store/actions/auth';
import Header from './Header/Header'

const App = (props) => {

    const dispatch = useDispatch()
    const loggedInStatus = useSelector(state => state.auth.loggedInStatus)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const checkLoginStatus = async () => {
            await axios
            .get("http://localhost:3000/logged_in", { withCredentials: true })
            .then(response => {
                console.log(response.data);
                console.log("[App]", loggedInStatus)
                if (response.data.logged_in){
                    loggedInStatus === "NOT_LOGGED_IN" ? dispatch(authenticate("LOGGED_IN", response.data.user)) : null;
                    //props.history.push('/')
                }else{
                    loggedInStatus === "LOGGED_IN" ? dispatch(authenticate("NOT_LOGGED_IN", {})) : null;
                    props.history.push('/login')
                }
                setLoaded(true)
                
            }).catch(error => {
                console.log("check login error", error);
            });
        }
        checkLoginStatus();
      }, []);  
    
    return(
         <React.Fragment>
            {loaded && <Header {...props} /> }
            <Switch>     
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/register"} component={Register} />
                <Route exact path={"/p/new"} component={NewPost}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;