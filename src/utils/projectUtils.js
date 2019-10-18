import React from "react";
import { Media } from "reactstrap";
import { PROJECT_DATA } from "../data/projectData";

export const getProjects = () => {
  let projectList = [];
  for (let i = 0; i < PROJECT_DATA.projects.length; i++) {
    let project = PROJECT_DATA.projects[i];
    projectList.push(
      <Media key={i}>
        <Media body>
          <Media heading>{project.title}</Media>
          {project.text}
        </Media>
        <Media right>
          <Media  object className="image" src={project.image} />
        </Media>
      </Media>
    );
  }
  return projectList;
};
