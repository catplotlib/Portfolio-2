import React from "react";
import { IconContext } from "react-icons";
import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";
const Socials = () => {
  return (
    <div>
      <h1>My Socials</h1>
      <IconContext.Provider value={{ color: "#6f6077", size: "3rem" }}>
        <div className="container-p">
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
      </IconContext.Provider>
    </div>
  );
};

export default Socials;
