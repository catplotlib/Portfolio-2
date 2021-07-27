import React from "react";
import Acard from "../components/Acard";

const text = [{ t1: "hELLO ,HOW AR YOU? ", t2: " \n I am good." }];

const Achievments = () => {
  return (
    <>
      <h1>My Skills</h1>
      <div className="container-a">
        <Acard>
          <div>
            <p>
              Frontend Skills: React, React Native, Javascript, jQuery,
              Gatsby,saas,html,css
            </p>
            <p>Backend Skills: Nodejs, Expressjs, MongoDB</p>
          </div>
        </Acard>
      </div>
    </>
  );
};

export default Achievments;
