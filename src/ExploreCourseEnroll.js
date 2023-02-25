import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from "axios";
import NavbarAuth from './NavbarAuth';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("token");

export default function ExploreCourseEnroll(){
    // initial state 
    const { courseCode } = useParams()
    const [userEmail, setEmail] = useState("");
    const [enrolled, setEnrolled] = useState(false);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "https://nodejs-auth-app-oyu.herokuapp.com/get-email/",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // make the API call
        axios(configuration)
          .then((response) => {
            // assign the message in our response to the message we initialized above
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            error = new Error();
          });
      }, [])

      const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configuration 
        const configuration = {
            method: "post",
            url: "https://nodejs-auth-app-oyu.herokuapp.com/add-user-to-course",
            data: {
                courseCode,
                userEmail
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                // redirect user to the auth page
                window.location.href = "/dashboard";
                
                setEnrolled(true);
            })
        .catch((error) => {
            error = new Error();
        });
      }

    return (
        <>
        <NavbarAuth/>
        {!isLoading && (
            <div className='content'>
        <h2 className='word'>Course Enrollment</h2>
        <Form onSubmit={(e)=>handleSubmit(e)} style={{color:'white'}}>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label><b>Course Registration acknowledgement</b></Form.Label>
            <p>We are delighted that you have chosen to enroll in our online course, and we are confident that you will find the experience both enjoyable and rewarding.

Please note that your registration is now being processed. Once your payment has been received and your registration has been approved, you will receive an email containing detailed instructions on how to access the course materials and participate in the class.

If you have any questions or concerns, please do not hesitate to contact us. We are always here to help and support you throughout your learning journey.

Thank you for choosing our online course, and we look forward to working with you!</p>
            <Form.Check 
                type='checkbox'
                id='acknowledgement'
                label='Do you want to enroll in?'
                onChange = {(e) => setEmail(data.email)}
            />
            </Form.Group>
            {/* submit button */}
            <Button className="btn" variant="secondary" type="submit" style={{backgroundColor:'#232323'}} onClick={(e)=>handleSubmit(e)}>
            Enroll
            </Button>
            {/* Display success message */}
            {enrolled ? (
                <p className="text-success">You have enrolled in {courseCode} successfully!</p>
            ) : (
                <p className="text-danger">You are not enrolled in</p>
            )}
        </Form>
        </div>

        )}
        </>
    )
}