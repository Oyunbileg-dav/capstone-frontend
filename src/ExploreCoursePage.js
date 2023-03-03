import React from "react";
import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";

export default function ExploreCoursePage() {
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
          <h5>Description: {data.description}</h5>
          <h5>Duration: {data.duration}</h5>
          <h5><Link to={"/explore/courses/"+courseCode+"/enroll"}>Enroll in this course</Link></h5>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          <div class="player">
            <iframe class="responsive-iframe" src="https://drive.google.com/file/d/14j5cGeDzAkbOJe9r1s7XomN919xtasVD/preview" allow="autoplay" title="course_intro"></iframe>
          </div>
          </div>
        </>
      )}
    </>
  );
};
