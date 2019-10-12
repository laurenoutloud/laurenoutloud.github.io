import React from "react";
import linkedInLogo from "../images/linkedinlogo.png";
import githubLogo from "../images/githublogo.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <p>
          <strong>email: </strong> lauren.finley01@gmail.com
        </p>
        <p>
            <strong>LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/laurenfinley01" target="_blank"><img  src={linkedInLogo}/> </a>
        </p>
        <p>
            <strong>Github:</strong>
            <a href="https://github.com/laurenoutloud" target="_blank">
                <img src={githubLogo}/>
            </a>
        </p>
      </div>
    );
  }
}

export default Contact;
