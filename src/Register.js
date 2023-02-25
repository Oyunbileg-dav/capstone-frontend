import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function Register(){
    // Initial state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [helperText, setHelperText] = useState("")
    const [className, setClassName] = useState("")

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations 
        const configuration = {
            method: "post",
            url: "https://nodejs-auth-app-oyu.herokuapp.com/register",
            data: {
                email,
                password
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                // redirect user to the auth page
                window.location.href = "/login";
                alert("You registered successfully!")
            })
            .catch((error) => {
                error = new Error();
                alert("Error! There alrady exists an account associated with this email address!")
            })

      }

    const checkPassword = (passwordConfirm) => {
        setPasswordConfirm(passwordConfirm);
        if (password === passwordConfirm) {
            setHelperText("Passwords match!");
            setClassName('text-success')
        } else {
            setHelperText("Passwords do not match!");
            setClassName('text-danger')
        }
    }

    return (
        <>
        <div className='content'>
        <h2 className='word'>Start your learning today!</h2>
        <Form onSubmit={(e)=>handleSubmit(e)} style={{color:'white'}}>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" 
            />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
                type="password" 
                name="confirm-password"
                value={passwordConfirm}
                // onChange={(e) => setPasswordConfirm(e.target.value)}
                onChange={(e) => checkPassword(e.target.value)}
                placeholder="Confirm password" />
            </Form.Group>
            {/* submit button */}
            <Button className="btn" variant="secondary" type="submit" onClick={(e) => handleSubmit(e)} style={{backgroundColor:'#232323'}}>
            Sign Up
            </Button>
            {/* display success message */}
            {/* {register ? (
            <p className="text-success">You are registered successfully!</p>
            ) : (
            <p className="text-danger">You are not registered</p>
            )} */}
            <p className={className}>{helperText}</p>

        </Form>
        </div>

        </>
    )
}