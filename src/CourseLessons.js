import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import video1 from  "./videos/video1.mp4"

export default function CourseLessons() {
  const { courseCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/courses/${courseCode}/lessons`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/courses/${courseCode}/lessons`);
      })
      .catch((error) => console.log(error));
  }, [courseCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
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
        </>
      )}
    </>
  );
};
