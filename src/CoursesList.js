import React from "react";
import { useEffect, useState  } from "react";
import Navbar from "./Navbar";

export default function CoursesList() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nodejs-auth-app-oyu.herokuapp.com/courses/", {})
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    <Navbar/>
    <div className="content">
      <h1 className="word">Available courses</h1>
      <p className="desc">Log in to access courses!</p>
      <div class="card">
      {!isLoading &&
        data.map((course) => {
          return (
            <div class="container">
            <h4><b>{course.courseName}</b></h4>
            <p>{course.description}</p> 
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
};
  