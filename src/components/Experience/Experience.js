import React from "react";
import "../Experience/Experience.css";
import "../../Terminals/Terminal.css";
import resume from "../../Resources/util/resume.pdf";
const Experience = () => {
  return (
    <div className="experience main">
      <div>
        <div className="container">
          <span className="title">
            <h1>
              Download my{" "}
              <a
                className="resume"
                href={resume}
                style={{ color: "pink", fontSize: "40px" }}
                target="_blank"
                rel="noreferrer"
              >
                Resume📝
              </a>
            </h1>
          </span>
          <p>
            Here are a few technologies I've worked with recently:
            <br />⠀
          </p>

          <div id="tech" className="skills">
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/html-5--v1.png"
                alt="HTML"
              />{" "}
              <p>HTML</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/css3.png"
                alt="CSS"
              />{" "}
              <p>CSS</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/javascript--v2.png"
                alt="JavaScript"
              />{" "}
              <p>JavaScript</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/nodejs.png"
                alt="Node.js"
              />{" "}
              <p>Node.js</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/react-native.png"
                alt="React"
              />{" "}
              <p>React</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/mongodb.png"
                alt="MongoDB"
              />{" "}
              <p>MongoDB</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/color/144/000000/mysql-logo.png"
                alt="MySQL"
              />{" "}
              <p>MySQL</p>
            </div>
            <div className="skill-block">
              <img
                src="https://img.icons8.com/ios-filled/150/4a90e2/jquery.png"
                alt="jQuery"
              />{" "}
              <p>jQuery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
