import React from "react";
import "./Work.css";
import "../../Terminals/Terminal.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import weather from "../../Resources/images/weather.png";
import movie from "../../Resources/images/movie.png";
import textEditor from "../../Resources/images/textEditor.png";
import techBlog from "../../Resources/images/techBlog.png";
import dictionary from "../../Resources/images/dictionary.png";
import Quiz from "../../Resources/images/Quiz.png";
const Work = () => {
  return (
    <Container fluid className="project-section">
      <div className="main">
        <div className="projects">
          <div className="workHeader">
            <h3>Projects I have build</h3>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weather}
                title="Weather App"
                description="Use OpenWeather API to fetch weather informaton."
                linkApp="https://omermasih.github.io/Weather-App/"
                linkGithub="https://github.com/OmerMasih/Weather-App"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={textEditor}
                title="TextEditor"
                description="A code editor app that can be downloaded and used offline."
                linkApp="https://text-editor-backend.herokuapp.com/"
                linkGithub="https://github.com/OmerMasih/Text-Editor-PWA"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={techBlog}
                title="TechBlog Database"
                description="Allows users to create an account and post their blog posts."
                linkApp="https://tech-blog-database.herokuapp.com/"
                linkGithub="https://github.com/OmerMasih/TechBlog-Database"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dictionary}
                title="Dictionary App"
                description="Dictionary that finds the definition of the word, besides there is a Game of words is also established for fun.."
                linkApp="https://omermasih.github.io/Dictionary-App/"
                linkGithub="https://github.com/OmerMasih/Dictionary-App"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={movie}
                title="Movie-Search"
                description="A dynamically generated movie search."
                linkApp="https://box-office-crash.herokuapp.com/"
                linkGithub="https://github.com/OmerMasih/movie-search"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Quiz}
                title="Coding Quiz Application"
                description=" A JavaScript Code Quiz challenge has 8 questions and it saves data in local storage ."
                linkApp="https://omermasih.github.io/QuizApp.js/"
                linkGithub="https://github.com/OmerMasih/QuizApp.js"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Work;
