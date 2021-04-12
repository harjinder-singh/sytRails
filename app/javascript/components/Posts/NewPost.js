import React,{ useState, useEffect, Component} from "react";
import { useSelector, useDispatch, connect } from 'react-redux'
import axios from 'axios'
import FormData from 'form-data'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import PostForm from './PostForm'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const newPost  = (props) =>  {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    const [errors, setErrors] = useState("");
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    const loggedIn = useSelector(state => state.auth.loggedInStatus)

    useEffect(() => {
        console.log("[New post]", loggedIn)
    }, [loggedIn]);
    

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        switch (event.target.name){
            case "title": 
                setTitle(event.target.value);
                break;
            case "description": 
                setDescription(event.target.value);
                break;
            default: 
                console.log("Should not reach here!!");
        }
    }
    
    const handleSubmit = (event) =>  {
        event.preventDefault();
        console.log(title, description)
        let data = new FormData();
        data.append('post[image]', image[0], image.name);
        data.append('post[title]', title)
        data.append('post[description]', description)
        console.log(data);
        setLoading(true)
        axios
            .post(
            "http://localhost:3000/api/v1/posts",
            data,
            { 
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                } 
            }
            )
            .then(response => {
                setLoading(false)
                if (response.data) {
                    props.history.push("/");
                }
            })
            .catch(error => {
                setLoading(false)
                setErrors(error)
                console.log("login error", error);
            });
    }

    const handleImageUpload = (event) => {
        if(event){
            setImage(event)
        }else{
            //Nothing Yet
        }
    }

    let postForm = (<PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imageChangeHandler={handleImageUpload}
    />)

    if(loading){
        postForm = (<div className="sweet-loading">
            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>)
    }

    return (
        <div>
            {postForm }
        </div>
    );
  
};

export default newPost;
