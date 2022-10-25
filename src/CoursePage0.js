import React from "react";
import { useEffect, useState,  } from "react";
import axios from "axios";


export default function CoursesPage0() {

  const [message, setMessage] = useState("");
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-oyu.herokuapp.com/course-page0",
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
      <h1 className="text-center">Course Page /no auth needed/</h1>
      <h3 className="text-center text-danger">{message}</h3>  
    </div>
  );
}
