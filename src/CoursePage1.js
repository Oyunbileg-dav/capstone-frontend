import React from "react";
import { useEffect, useState,  } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";
import { Routes, Route} from "react-router-dom";
import Lesson from "./Lesson";

const cookies = new Cookies();
const token = cookies.get("token");

export default function CoursePage1() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-oyu.herokuapp.com/course-page1",
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
  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("token", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }
  return (
    <div>
      <h1 className="text-center">Course Page /auth needed/</h1>
      <h3 className="text-center text-danger">{message}</h3>
      <div className="text-center">
        <Button type="submit" variant="danger" onClick={() => logout()}>Logout</Button> 
      </div>
      <section id="route">
        <a href="/lesson">Lesson</a>
      </section>
      <Routes>
        <Route path="/lesson" element={<Lesson/>}/>
      </Routes>
    </div>
  );
}
