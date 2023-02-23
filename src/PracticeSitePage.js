import React from "react";
import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NavbarAuth from "./NavbarAuth";


export default function PracticeSitePage() {
  const { practiceSiteCode } = useParams()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nodejs-auth-app-oyu.herokuapp.com/practice-sites/${practiceSiteCode}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://nodejs-auth-app-oyu.herokuapp.com/practice-sites/${practiceSiteCode}`);
      })
      .catch((error) => console.log(error));
  }, [practiceSiteCode]);

  return (
    <>
    <NavbarAuth/>
      {!isLoading && (
        <>
          <div className="content">
          <h1 className="word">{data.practiceSiteName}</h1>
          <div class="card">
          <h4>Practice Site Code: {data.practiceSiteCode}</h4>
          <h4>Description: {data.description}</h4>
          <h4>Address: {data.address}</h4>
          <Link to="/dashboard">Back to dashboard</Link>
          </div>
          </div>
        </>
      )}
    </>
  );
};
