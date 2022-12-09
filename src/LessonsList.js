import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth";


export default function LessonsList() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nodejs-auth-app-oyu.herokuapp.com/lessons/", {})
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    <NavbarAuth/>
    <div className="content">
      <h1 className="word">Lessons List</h1>
      <div class="card">
      {!isLoading &&
        data.map((lesson) => {
          return (
            <div class="container">
            <h4><b><Link to={`/lessons/${lesson.lessonCode}`}> {lesson.lessonName} </Link></b></h4>
            <p>{lesson.description}</p> 
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
};