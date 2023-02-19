import React from "react";
import { useEffect, useState  } from "react";
import NavbarAuth from "./NavbarAuth";
import { Link } from "react-router-dom";

export default function Explore() {

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
    <NavbarAuth/>
    <div className="content">
      <h1 className="word">Courses List</h1>
      <div class="card">
      {!isLoading &&
        data.map((course) => {
          return (
            <div class="container">
            <h4><b><Link to={`/courses/${course.courseCode}`}> {course.courseName} </Link></b></h4>
            <p>{course.description}</p> 
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
};
  