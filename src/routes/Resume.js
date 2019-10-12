import React from 'react';
import resume from "../documents/resume.pdf";
import resumePhoto from "../images/resume.jpg";
import "../css/Resume.css"

class Resume extends React.Component{
    render(){
        return(
            <div>
            <h1>Resume</h1>
            <p>For a downloadable version, click <a href={resume} target="_blank">here</a>.</p>
            <img className="resumePhoto" src={resumePhoto}/>
            </div>
        );
    }
}

export default Resume;
