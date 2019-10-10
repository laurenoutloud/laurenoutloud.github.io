import React from 'react';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component{
    render(){
        return(
            <div>
                <Link to= "/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
            </div>
        )
    }
}

export default NavigationBar;
