import React from "react";
import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import NavbarAuth from "./NavbarAuth";
const cookies = new Cookies();
const token = cookies.get("token");


export default function Dashboard() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-auth-app-oyu.herokuapp.com/dashboard/",
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

  if (!isLoading && data.length > 0){
    return (
      <div>
      <NavbarAuth/>
      <div className="content">
        <h1 className="word">Enrolled courses</h1>
        <div class="card">
        {!isLoading &&
          data.map((course) => {
            return (
              <div class="container">
              <h4><b><Link to={`/courses/${course.courseCode}`}> {course.courseName} </Link></b></h4>
              <p>{course.description}</p> 
              </div>
            );
          })}
      </div>
      </div>
      </div>
    );
        }
    return (
      <div>
      <NavbarAuth/>
      <div className="content">
        <h1 className="word">Enrolled courses</h1>
        <div class="card">
        {!isLoading &&
          <div class="container">
          <h5>You have not enrolled in any courses yet! <Link to="/explore">Explore course</Link></h5>
          </div>
          }
      </div>
      </div>
      </div>
    )
  }
//   return (
//     <div>
//     <NavbarAuth/>
//     <div className="content">
//       <h1 className="word">Enrolled courses</h1>
//       <div class="card">
//       {!isLoading &&
//         data.map((course) => {
//           return (
//             <div class="container">
//             <h4><b><Link to={`/courses/${course.courseCode}`}> {course.courseName} </Link></b></h4>
//             <p>{course.description}</p> 
//             </div>
//           );
//         })}
//     </div>
//     </div>
//     </div>
//   );
// }
