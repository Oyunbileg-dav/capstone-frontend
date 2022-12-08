import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";
import video2 from  "./videos/video2.mp4"


export default function PracticePage() {
  const { practiceCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9000/practices/${practiceCode}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`http://localhost:9000/practices/${practiceCode}`);
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
          <h4>Practice Lesson Code: {data.practiceCode}</h4>
          <h4>Description: {data.description}</h4>
          <h4>Duration: {data.duration}</h4>
          <h4><b><a href="https://docs.google.com/document/d/1Sp-QMKNSBBdTOSUGvN_tTrNwG54F_lEE/edit?usp=sharing&ouid=101711393580784015239&rtpof=true&sd=true">Access materials</a></b></h4>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          <div className="video-player">
          <video src={video2} width="1200" height="600" controls="controls" autoplay="true" />
          </div>
          </div>
        </>
      )}
    </>
  );
};
