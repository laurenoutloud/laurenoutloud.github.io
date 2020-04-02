import React from "react";
import { Media } from "reactstrap";
import naturePhoto from "../images/nature-photo.jpg";
import {ABOUT_DATA} from "../data/aboutData";
import resume from "../documents/resume.pdf";
import "../css/About.css";
import selfPhoto from "../images/graduate-photo.jpg";
import linkedInLogo from "../images/linkedinlogo.png";
import githubLogo from "../images/githublogo.png";

export const introduction = () => (
  <div className="introduction">
    <img className="about-image" src={selfPhoto} />
    <h3>About Me</h3>
    <p>
      Hi, my name is Lauren! I am a software developer, thrill seeker, and world
      traveler. I'm currently seeking employment opportunities as a full stack software engineer.
    </p>
  </div>
);

export const resumeData = () => (
  <div className="resume">
    <h3>Resume</h3>
    <p>For a downloadable version, click <a href={resume} target="_blank">here</a>.</p>
  </div>
);

export const hobbies = () => (
  <div className="hobbies">
    <h3>Hobbies</h3>

    <ul>
      <li>
        <strong>Reading. </strong>I enjoy reading, especially non-fiction and
        self improvement books, and if I come across a subject that I find
        interesting I like to read up on it.
      </li>
      <li>
        <strong>Exercising. </strong>There's no better way to clear your mind
        than to go for a run or to pump some iron. Recently I have been getting
        into yoga.
      </li>
      <li>
        <strong>Gaming. </strong>Some of my favorite games include Halo, Spyro,
        and Runescape.
      </li>
      <li>
        <strong>Photography. </strong>While I don't consider myself
        photographer, I do have a nice camera and sometimes I like to experiment
        around with it.
      </li>
      <li>
        <strong>Movie Soundtracks. </strong>Whenever I need some extra
        motivation, I like to listen to the soundtracks of renowned composers.
        Hans Zimmer and Brian Tyler are two of my favorites.
      </li>
    </ul>

    <h3>Interests</h3>
    <ul>
      <li>
        <strong>Travel. </strong>I love traveling. Visiting new places opens up
        so many doors and can completely change your perspective on life.
      </li>
      <li>
        <strong>Food. </strong>As long as it's not painfully spicy, I'm willing
        to try anything.
      </li>
      <li>
        <strong>Technology. </strong>When I read and study about all of the
        advancements in medicine, simulation trainings, and really just
        technological advancements throughout society as a whole- I find it
        breathtaking.
      </li>
      <li>
        <strong>Japan. </strong>I studied abroad in Japan for an academic year,
        and I learned so much about Japan and Japanese culture. I plan on
        returning to Japan again in the future.
      </li>
      <li>
        <strong>Philosophy & Psychology. </strong>I've taken an interest in
        studying how/why people think the way they do and why they act the way
        they act.
      </li>
    </ul>
  </div>
);

export const affiliateOrganizations = () => {
  let affiliateOrganizationList = [];

  for (let i = 0; i < ABOUT_DATA.organizations.length; i++){
    let organization = ABOUT_DATA.organizations[i];
    affiliateOrganizationList.push(
      <Media>
        <Media body>
          <Media heading>
            {organization.title}
          </Media>
            {organization.text}
        </Media>
      </Media>
    )
  }
  return affiliateOrganizationList;
};

export const contact = () => (
  <div className="contact">
        <h3>Contact</h3>
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
