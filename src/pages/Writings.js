import React from "react";
import Wcard from "../components/Wcard";
import "./Writings.css";
import writings from "../assets/writings";
const Writings = () => {
  return (
    <div>
      <h1>My Writings</h1>
      <div className="container-grid-w" id="writings">
        {writings.map((writing) => {
          return (
            <div className="grid-item-w">
              <Wcard
                title={writing.title}
                description={writing.description}
                url={writing.url}
                repo={writing.repo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Writings;
