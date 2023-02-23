import React from "react";
import { useEffect, useState  } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import NavbarAuth from "./NavbarAuth";
const cookies = new Cookies();
const token = cookies.get("token");

export default function Profile() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-oyu.herokuapp.com/get-email/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the API call
    axios(configuration)
      .then((response) => {
        // assign the message in our response to the message we initialized above
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        error = new Error();
      });
  }, [])
  
  return (
    <div className="text-center">
    <NavbarAuth/>
    {!isLoading && (
    <div className="content">
      <h1 className="text-center">Profile</h1>
      <h3 className="text-center text-danger">{data.email}</h3>
    </div>
    )
    }
    </div>
  );
}
