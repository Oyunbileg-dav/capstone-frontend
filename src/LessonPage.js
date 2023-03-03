import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";

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
          <div class="container">
          <h5>Description: {data.description}</h5>
          <h5>Duration: {data.duration}</h5>
          <h5><b><Link to={"/lessons/"+ lessonCode +"/practices"}>Practice Lessons</Link></b></h5>
          <h5><b><Link to={"/lessons/"+ lessonCode +"/quizzes"}>Practice Questions</Link></b></h5>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          </div>
          <div class="player">
            <iframe class="responsive-iframe" src="https://drive.google.com/file/d/1ogAgbEaO5cuYL2bm8ki3NfXHBi32a8uo/preview" allow="autoplay" title="course_intro"></iframe>
          </div>
          </div>
        </>
      )}
    </>
  );
};
