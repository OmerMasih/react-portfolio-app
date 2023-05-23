//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import "./About.css";
import "../../Terminals/Terminal.css";
import profileImage from "../../assets/profile-pic.jpeg";

const About = () => {
  return (
    <section className="main section">
      <div className="about">
        <div className="text">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <p className="para">
            Welcome to my portfolio! I am a passionate and hands-on experience
            full stack web developer dedicated to creating stunning and
            functional websites that leave a lasting impression. With a strong
            foundation in HTML, CSS, and JavaScript, I possess the technical
            skills necessary to bring ideas to life in the digital realm.
            Enthusiastic about learning new technologies and resolving difficult
            challenges. Ability to lead projects and solve technical challenges,
            utilizing problem-solving, project management, and analytical skills
            . Effective team player with strong communication skills and great
            attention to details. Worked in a highly regulated and fast-paced
            environment without missing any deadlines. Having received a
            “Certificate” in Full Stack Web Development from UC-Davis..
          </p>
        </div>
        <img className="profile-pic" src={profileImage} alt="profile" />
        <div className=""></div>
      </div>
    </section>
  );
};

export default About;
