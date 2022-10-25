import React from "react";
import { useEffect, useState,  } from "react";
import axios from "axios";
import { Routes, Route} from "react-router-dom";
import CoursesPage0 from "./CoursePage0";

export default function CoursesList() {

  const [message, setMessage] = useState("");
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-oyu.herokuapp.com/courses-list",
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, [])
  return (
    <div>
      <h1 className="text-center">Courses List</h1>
      <h3 className="text-center text-danger">{message}</h3>  
      <section id="route">
        <a href="/course-page0">CoursePage0</a>
      </section>
      <Routes>
          <Route path="/course-page0" element={<CoursesPage0/>}/>
      </Routes>
    </div>
    
  );
}
