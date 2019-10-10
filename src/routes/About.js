import React from 'react';
import "../css/About.css"
import naturePhoto from "../images/nature-photo.jpg";


class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h1>About</h1>
                <div className="content">
                <div>
                <img className="about-image" src={naturePhoto}/>
                </div>
                <p>
                Hi, my name is Lauren! I am a software developer, thrill seeker, and world traveler. I am currently seeking full-time employment opportunities both within the U.S. and abroad as a software engineer.
                </p>
                </div>
            </div>
        );
    }
}

export default About;
