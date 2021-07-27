import { useState } from "react";
import Card from "../components/Card";
import Pcard from "../components/Pcard";
import "./Projects.css";
import projects from "../assets/projects";
const Projects = () => {
  return (
    <>
      <h1>My projects</h1>
      <div className="container-grid" id="projects">
        {projects.map((project) => {
          return (
            <div className="grid-item">
              <Pcard
                title={project.title}
                img={project.img}
                description={project.description}
                url={project.url}
                repo={project.repo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
