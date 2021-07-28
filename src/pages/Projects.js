import Pcard from "../components/Pcard";
import "./Projects.css";
import projects from "../assets/projects";
import { IconContext } from "react-icons";
import { RiComputerFill } from "react-icons/ri";

const Projects = () => {
  return (
    <>
      <h1>
        <IconContext.Provider value={{ color: "#cdb4db", size: "3rem" }}>
          My projects <RiComputerFill />
        </IconContext.Provider>
      </h1>
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
