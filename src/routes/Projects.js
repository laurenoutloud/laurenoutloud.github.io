import React from "react";
import { projects } from "../documents/projectData";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>
          Documentation of current and previous projects will be added shortly,
          but for now please check out my github by{" "}
          <a href="https://github.com/laurenoutloud" target="_blank">
            clicking here!
          </a>
        </p>
        {projects()}
      </div>
    );
  }
}

export default Projects;
