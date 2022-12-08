import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login(){
    // initial state 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
  
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configuration 
        const configuration = {
            method: "post",
            url: "http://localhost:9000/login",
            data: {
                email,
                password
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                // set the cookie
                cookies.set("token", result.data.token, {
                    path: "/",
                });
                // redirect user to the auth page
                window.location.href = "/dashboard";
                
                setLogin(true);
            })
        .catch((error) => {
            error = new Error();
        });
      }

    return (
        <>
        <div className='content'>
        <h2 className='word'>Welcome back!</h2>
        <Form onSubmit={(e)=>handleSubmit(e)} style={{color:'white'}}>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                name="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="Enter email" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                name="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder="Password" />
            </Form.Group>

            {/* submit button */}
            <Button className="btn" variant="secondary" type="submit" style={{backgroundColor:'#232323'}} onClick={(e)=>handleSubmit(e)}>
            Log in
            </Button>
            {/* Display success message */}
            {login ? (
                <p className="text-success">You are logged in successfully!</p>
            ) : (
                <p className="text-danger">You are not logged in</p>
            )}
        </Form>
        </div>
        

        </>
    )
}