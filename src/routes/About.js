import React from "react";
import "../css/About.css";

import {introduction, affiliateOrganizations, contact} from "../utils/aboutUtils";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        
        <h1>About</h1>
        {introduction()}
        {affiliateOrganizations()}
        {contact()}
        <div className="content">
        </div>
      </div>
    );
  }
}

export default About;
