import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth";


export default function PracticeLessons() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nodejs-auth-app-oyu.herokuapp.com/practices/", {})
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
      <h1 className="word">Practice Lessons List</h1>
      <div class="card">
      {!isLoading &&
        data.map((practice) => {
          return (
            <div class="container">
            <h4><b><Link to={`/practice-lessons/${practice.practiceCode}`}> {practice.practiceName} </Link></b></h4>
            <p>{practice.description}</p> 
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
};