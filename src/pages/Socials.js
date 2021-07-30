import React from "react";
import { IconContext } from "react-icons";
import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";
const Socials = () => {
  return (
    <div className="cs">
      <h1>My Socials</h1>
      <IconContext.Provider value={{ color: "#6f6077", size: "3rem" }}>
        <div className="container-s">
          <a href="https://twitter.com/CatPlotLib">
            <GrTwitter />
          </a>
          <a href="https://www.linkedin.com/in/catplotlib/">
            <GrLinkedin />
          </a>
          <a href="https://github.com/catplotlib">
            <GrGithub />
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1oziHS6qCXek92z27u-kN9mLBN-nWLBJQ/view">
            <button style={{ marginBottom: "100px" }} className="btn">
              My Resume
            </button>
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Socials;
