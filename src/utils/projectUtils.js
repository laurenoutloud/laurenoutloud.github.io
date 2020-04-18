import React from "react";
import { Card, Button, CardText, CardBody,
  CardHeader, CardFooter } from "reactstrap";
import { PROJECT_DATA } from "../data/projectData";

function getDocumentationLink(link) {
  if (link) {
    return (<Button color="secondary" href={link} target="_blank">Documentation</Button>);
  }
}

function getLiveLink(link) {
  if (link) {
    return (<Button color="success" href={link} target="_blank">Explore</Button>);
  }
}

function getCodeLink(link) {
  if (link) {
    return (<Button color="info" href={link} target="_blank">Code</Button>);
  }
}

export const getProjects = () => {
  let projectList = [];
  for (let i = 0; i < PROJECT_DATA.projects.length; i++) {
    let project = PROJECT_DATA.projects[i];
    projectList.push(
      <Card key={i}>
          <CardHeader tag="h3">{project.title}</CardHeader>
        <CardBody>
          <img width="100%" src={project.image}/>
        </CardBody>
        <CardBody>
          <CardText tag="h6">{project.techStack}</CardText>
          <CardText>{project.text}</CardText>
          
        </CardBody>
        <CardFooter>
          {getLiveLink(project.liveLink)}
          {getCodeLink(project.codeLink)}
          {getDocumentationLink(project.documentationLink)}
        </CardFooter>
      </Card>
    );
  }
  return projectList;
};
