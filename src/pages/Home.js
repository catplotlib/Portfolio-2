import React from "react";
import Card from "../components/Card";
import "./Home.css";
import Writings from "./Writings";
import Achievments from "./Achievments";
import Socials from "./Socials";

import Projects from "./Projects";
const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <img
            src="https://image.flaticon.com/icons/png/512/3468/3468377.png"
            alt="cat"
            className="cat"
          />
          <Card
            text={"Hey, I’m Puja. I am a Frontend Developer."}
            style={{ height: "50%", width: "60%" }}
          />
        </div>
      </section>

      <section id="projects">
        <div>
          <Projects />
        </div>
      </section>

      <section id="writings">
        <div>
          <Writings />
        </div>
      </section>

      <section id="achievments">
        <div>
          <Achievments />
        </div>
      </section>

      <section id="socials">
        <div>
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Home;
