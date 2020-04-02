import React from "react";
import {ABOUT_DATA} from "../data/aboutData";
import resume from "../documents/resume.pdf";
import "../css/About.css";
import selfPhoto from "../images/graduate-photo.jpg";
import linkedInLogo from "../images/linkedinlogo.png";
import githubLogo from "../images/githublogo.png";

export const introduction = () => (
  <div className="introduction">
    <img className="about-image" src={selfPhoto} />
    <p>
      Hi, my name is Lauren! I am a software developer, thrill seeker, and world
      traveler. I'm currently seeking employment opportunities as a full stack software engineer.
    </p>
    <p>
    <h4>Hobbies & Interests</h4> Traveling, reading, exercising, gaming, photography, Japan, movie soundtracks, food, technology, philosophy, psychology
    </p>
    <p>
    <h4>Resume</h4>
    For a downloadable version, click <a href={resume} target="_blank">here</a>.
    </p>
  </div>
);

export const affiliateOrganizations = () => {
  let affiliateOrganizationList = [];

  for (let i = 0; i < ABOUT_DATA.organizations.length; i++){
    let organization = ABOUT_DATA.organizations[i];
    affiliateOrganizationList.push(
      <p>
          <h6>{organization.title}. </h6>
          {organization.text}
      </p>
    )
  }
  return (
    <p>
      <h4>Affiliate Organizations</h4>
      {affiliateOrganizationList}
    </p>
    );
};

export const contact = () => (
  <div className="contact">
        <h4>Contact</h4>
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
