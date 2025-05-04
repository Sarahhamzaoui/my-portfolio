import React from "react";
import profilePic from "../assets/profile.jpg"; // Place your image in /src/assets

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profilePic} alt="Profile" width="150" />
      <p>Hello! I'm a <span className="highlight">web developer</span> new at this domain but love all what is about computer science and devolppement</p>
    </section>
  );
}

export default About;
