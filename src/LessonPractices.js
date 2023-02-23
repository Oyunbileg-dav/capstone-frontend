import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";

export default function LessonPractices() {
  const { lessonCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}/practices`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/lessons/${lessonCode}/practices`);
      })
      .catch((error) => console.log(error));
  }, [lessonCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
        <NavbarAuth/>
        <div className="content">
          <h1 className="word">Practice Lessons</h1>
          <div class="card">
          {!isLoading &&
            data.map((practice) => {
              return (
                <div class="container">
                <h4><b><Link to={`/practice-lessons/${practice.practiceCode}`}> {practice.practiceName} </Link></b></h4>
                <p>{practice.description}</p> 
                <p>{practice.duration}</p>
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
