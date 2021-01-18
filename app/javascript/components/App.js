import React,{ useState, useEffect} from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import Login from './auth/Login'
import Register from './auth/Register'
import NewPost from './Posts/NewPost'
import axios from 'axios'
import {authenticate} from '../store/actions/auth';
import { useSelector, useDispatch, connect } from 'react-redux'

const App = () => {

    const dispatch = useDispatch();
    const loggedInStatus = useSelector(state => state.auth.loggedInStatus)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const checkLoginStatus = async () => {
            await axios
            .get("http://localhost:3000/logged_in", { withCredentials: true })
            .then(response => {
                if (
                    response.data.logged_in &&
                    loggedInStatus === "NOT_LOGGED_IN"
                ) {
                    dispatch(authenticate("LOGGED_IN", response.data.user))
                } else if (
                    !response.data.logged_in &
                    (loggedInStatus === "LOGGED_IN")
                ) {
                    dispatch(authenticate("NOT_LOGGED_IN", {}))
                }
                
            }).catch(error => {
            console.log("check login error", error);
            });
            setLoaded(true)
        }
        checkLoginStatus();
      }, []);

    const handleLogout = () => {
        dispatch(authenticate("NOT_LOGGED_IN", {}))
    }
    
    const handleLogin = (data) => {
        dispatch(authenticate("LOGGED_IN", data.user))
    }    
    
    return(
        <div className="app">
            { loaded && <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} render={props => (
                        <Home
                        {...props}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                        loggedInStatus={loggedInStatus}
                        />
                    )}
                    />
                    <Route exact path={"/login"} render={props => (
                        <Login
                        {...props}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                        loggedInStatus={loggedInStatus}
                        />
                    )}
                    />
                    <Route exact path={"/register"} render={props => (
                        <Register
                        {...props}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                        loggedInStatus={loggedInStatus}
                        />
                    )}
                    />
                    <Route exact path={"/p/new"} render={props => (
                        <NewPost
                        {...props}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                        loggedInStatus={loggedInStatus}
                        />
                    )}
                    />
                </Switch>
            </BrowserRouter>
            }
        </div>

    );
}

export default connect()(App);