import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";


export default function PracticePage() {
  const { practiceCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/practices/${practiceCode}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/practices/${practiceCode}`);
      })
      .catch((error) => console.log(error));
  }, [practiceCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
          <div className="content">
          <h1 className="word">{data.practiceName}</h1>
          <div class="card">
          <div class="container">
          <h5>Description: {data.description}</h5>
          <h5>Duration: {data.duration}</h5>
          <h5><b><Link to={"/practice-lessons/"+practiceCode+"/practice-sites"}>Practice Sites</Link></b></h5>
          <h5><b><a href="https://docs.google.com/document/d/1Sp-QMKNSBBdTOSUGvN_tTrNwG54F_lEE/edit?usp=sharing&ouid=101711393580784015239&rtpof=true&sd=true">Access materials</a></b></h5>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          </div>
          <div class="player">
            <iframe class="responsive-iframe" src="https://drive.google.com/file/d/1slydTVTUuX5WUw9B5_uUnmok7nEbH4aX/preview" allow="autoplay" title="course_intro"></iframe>
          </div>
          </div>
        </>
      )}
    </>
  );
};
