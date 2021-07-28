import React from "react";
import Acard from "../components/Acard";

import { IconContext } from "react-icons";
import { GiSkills } from "react-icons/gi";

const Achievments = () => {
  return (
    <>
      <h1>
        <IconContext.Provider value={{ color: "#cdb4db", size: "3rem" }}>
          My skills <GiSkills />
        </IconContext.Provider>
      </h1>
      <div className="container-a">
        <Acard>
          <div>
            <p>
              Frontend Skills: React, React Native, Javascript, jQuery, Gatsby,
              SaaS, Html, Css
            </p>
            <p>Backend Skills: Nodejs, Expressjs, MongoDB</p>
          </div>
        </Acard>
      </div>
    </>
  );
};

export default Achievments;
