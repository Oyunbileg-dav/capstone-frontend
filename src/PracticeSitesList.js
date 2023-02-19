import React from "react";
import { useEffect, useState  } from "react";
import NavbarAuth from "./NavbarAuth";

export default function PracticeSitesList() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nodejs-auth-app-oyu.herokuapp.com/practice-sites/", {})
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
      <h1 className="word">Practice Sites List</h1>
      <div class="card">
      {!isLoading &&
        data.map((site) => {
          return (
            <div class="container">
            <h4><b>{site.practiceSiteName}</b></h4>
            <p>{site.description}</p> 
            <p>{site.address}</p>
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
};
  