import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import video3 from  "./videos/video3.mp4"

export default function LessonPage() {
  const { lessonCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}`);
      })
      .catch((error) => console.log(error));
  }, [lessonCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
          <div className="content">
          <h1 className="word">{data.lessonName}</h1>
          <div class="card">
          <h4>Lesson Code: {data.lessonCode}</h4>
          <h4>Description: {data.description}</h4>
          <h4>Duration: {data.duration}</h4>
          <h4><b><Link to="/practice-lessons">Practice Lessons</Link></b></h4>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          <div className="video-player">
          <video src={video3} width="1200" height="600" controls="controls" autoplay="true" />
          </div>
          </div>
        </>
      )}
    </>
  );
};
