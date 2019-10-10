import React from 'react';
import NavigationBar from "../components/NavigationBar";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar pageName="Contact" />
                <h1>Contact</h1>
            </div>
        );
    }
}

export default Contact;
