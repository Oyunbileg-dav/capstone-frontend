import React from "react";
import NavbarAuth from "./NavbarAuth";
import image1 from "./images/image1.jpg"

export default function LandingPageAuth() {
  return (
    <div className="content">
    <NavbarAuth/>
    <h2 className="word">Welcome!</h2>
    <div className="desc">
    <p>Welcome to [App Name], the innovative vocational training app that helps you gain the skills and knowledge you need to succeed in your career.</p>
    <p> With our app, you can take theoretical lessons online at your own pace, and then complete your practice lessons offline at nearby partner businesses. It's the perfect way to combine the flexibility of online learning with the practical experience you need to succeed.</p>
    <p>Our app offers a wide range of courses in various fields, including healthcare, hospitality, construction, and more. Our courses are designed by experts in the industry, ensuring that you get the most up-to-date and relevant information. Plus, with our flexible scheduling and personalized learning options, you can learn at your own pace and on your own schedule.
    But the best part of our app is the practical experience you'll gain. We've partnered with local businesses to provide you with real-world training opportunities, so you can apply what you've learned in a real-world setting. Whether you're practicing your skills in a hospital, restaurant, or construction site, you'll gain the experience and confidence you need to succeed.</p>
    <p>So why wait? Sign up for [App Name] today and take the first step towards a successful career!</p>
    </div>
    <div class="row">
      <div className="column">
      <img src={image1} alt="banner"/>
      <p>Mechanical Engineer</p>
      </div>
      <div class="column">
      <img src={image1} alt="banner"/>
      <p>Mechanical Engineer</p>
      </div>
      <div class="column">
      <img src={image1} alt="banner"/>
      <p>Mechanical Engineer</p>
      </div>
    </div>
    </div>
  );
}
