import React from "react";
import { getProjects } from "../utils/projectUtils";
import "../css/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <p>
          For additional information, please checkout my github by{" "}
          <a href="https://github.com/laurenoutloud" target="_blank">
            clicking here!
          </a>
        </p>
        <div className="project-content">
          {getProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
