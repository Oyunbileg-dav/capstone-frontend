import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";

export default function PracticeSites() {
  const { practiceCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/practices/${practiceCode}/practice-sites`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/practices/${practiceCode}/practice-sites`);
      })
      .catch((error) => console.log(error));
  }, [practiceCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
        <NavbarAuth/>
        <div className="content">
          <h1 className="word">Practice Sites</h1>
          <div class="card">
          {!isLoading &&
            data.map((practiceSite) => {
              return (
                <div class="container">
                <h4><b><Link to={`/practice-sites/${practiceSite.practiceSiteCode}`}> {practiceSite.practiceSiteName} </Link></b></h4>
                <p>{practiceSite.description}</p> 
                <p>{practiceSite.address}</p>
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
