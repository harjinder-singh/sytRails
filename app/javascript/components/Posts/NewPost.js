import React,{ useState, useEffect, Component} from "react";
import {authenticate} from '../../store/actions/auth';
import { useSelector, useDispatch, connect } from 'react-redux'
import axios from 'axios'
import Header from '../Header'
import PostForm from './PostForm'

class NewPost extends Component {
    constructor(props){
        super(props)

        this.state = {
            title :"",
            description : "",
            errors : ""
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if(this.props.loggedInStatus === 'NOT_LOGGED_IN'){
            this.props.history.push("/login")
        }
    }
    
    
    handleChange(event) {
        console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { title, description } = this.state;
        console.log(title, description)
        axios
            .post(
            "http://localhost:3000/api/v1/posts",
            {
                post: {
                title: title,
                description: description
                }
            },
            { withCredentials: true }
            )
            .then(response => {
                if (response.data) {
                    this.props.history.push("/");
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
    }

    render () {
        return (
            <div>
                <Header {...this.props}/>
                <PostForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
  
};

export default NewPost;
