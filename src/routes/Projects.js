import React from "react";
import { getProjects } from "../utils/projectUtils";
import "../css/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <p>
          Documentation of current and previous projects will be added shortly,
          but for now please check out my github by{" "}
          <a href="https://github.com/laurenoutloud" target="_blank">
            clicking here!
          </a>
        </p>
        {getProjects()}
      </div>
    );
  }
}

export default Projects;
