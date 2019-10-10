import React from 'react';
import NavigationBar from "../components/NavigationBar";

class About extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar pageName="About"/>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
