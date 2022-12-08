import React from "react";
import { useEffect, useState  } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import NavbarAuth from "./NavbarAuth";
const cookies = new Cookies();
const token = cookies.get("token");

export default function Profile() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:9000/profile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    <div className="text-center">
    <NavbarAuth/>
    <div className="content">
      <h1 className="text-center">Profile</h1>
      <h3 className="text-center text-danger">{message}</h3>
    </div>
    </div>
  );
}
