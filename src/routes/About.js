import React from "react";
import "../css/About.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import naturePhoto from "../images/nature-photo.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <Tabs>
          <TabList>
            <Tab>Introduction</Tab>
            <Tab>Hobbies & Interests</Tab>
            <Tab>Education</Tab>
            <Tab>Work Experience</Tab>
            <Tab>Affiliate Organizations</Tab>
          </TabList>
          <TabPanel>Introduction</TabPanel>
          <TabPanel>Hobbies & Interests</TabPanel>
          <TabPanel>Education</TabPanel>
          <TabPanel>Work Experience</TabPanel>
          <TabPanel>Affiliate Organizations</TabPanel>
        </Tabs>
        <div className="content">
          <div>
            <img className="about-image" src={naturePhoto} />
          </div>
          <p id="education">
            Hi, my name is Lauren! I am a software developer, thrill seeker, and
            world traveler. I am currently seeking full-time employment
            opportunities both within the U.S. and abroad as a software
            engineer.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
