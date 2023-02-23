import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import video1 from  "./videos/video1.mp4"
import { Button } from "react-bootstrap";
import axios from "axios";

export default function ExploreCoursePage() {
  const { courseCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/courses/${courseCode}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/courses/${courseCode}`);
      })
      .catch((error) => console.log(error));
  }, [courseCode]);

  useEffect(() => {
    fetch("https://nodejs-auth-app-oyu.herokuapp.com/get-email", {})
      .then((res) => res.json())
      .then((response) => {
        setUserEmail(response.data.email);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/get-email`);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configuration 
    const configuration = {
        method: "post",
        url: "https://nodejs-auth-app-oyu.herokuapp.com/add-user-to-course",
        data: {courseCode, userEmail},
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
        <>
          <div className="content">
          <h1>{userEmail}</h1>
          <h1 className="word">{data.courseName}</h1>
          <div class="card">
          <h4>Course Code: {data.courseCode}</h4>
          <h4>Description: {data.description}</h4>
          <h4>Duration: {data.duration}</h4>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          <>
          {/* submit button */}
          <Button className="btn" variant="secondary" type="submit" style={{backgroundColor:'#232323'}} onClick={(e)=>handleSubmit(e)}>
            Enroll in!
            </Button>
            {/* Display success message */}
            {enrolled ? (
                <p className="text-success">You have successfully enrolled in {data.courseName}!</p>
            ) : (
                <p className="text-danger">You are not enrolled in yet!</p>
            )}
          </>
          <div className="video-player">
          <video src={video1} width="90%" controls="controls" autoplay="true" />
          </div>
          </div>
        </>
      )}
    </>
  );
};
