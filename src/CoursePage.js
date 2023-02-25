import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import video1 from  "./videos/video1.mp4"

export default function CoursePage() {
  const { courseCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
          <div className="content">
          <h1 className="word">{data.courseName}</h1>
          <div class="card">
          <div class="container">
          <h5>Description: {data.description}</h5>
          <h5>Duration: {data.duration}</h5>
          <h5><b><Link to={"/courses/"+ courseCode +"/lessons"}> Lessons </Link></b></h5>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          </div>
          <div className="video-player">
          <video src={video1} width="90%" controls="controls" autoplay="true" />
          </div>
          </div>
        </>
      )}
    </>
  );
};
