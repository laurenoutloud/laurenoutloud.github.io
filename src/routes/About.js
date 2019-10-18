import React from "react";
import "../css/About.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {introduction, hobbies, education, affiliateOrganizations} from "../utils/aboutUtils";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Hobbies & Interests</Tab>
            <Tab>Education</Tab>
            <Tab>Affiliate Organizations</Tab>
          </TabList>
          <TabPanel>{introduction()}</TabPanel>
          <TabPanel>{hobbies()}</TabPanel>
          <TabPanel>{education()}</TabPanel>
          <TabPanel>{affiliateOrganizations()}</TabPanel>
        </Tabs>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default About;
