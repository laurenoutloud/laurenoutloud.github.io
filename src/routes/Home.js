import React from 'react';
import NavigationBar from "../components/NavigationBar";

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar pageName="Home"/>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;
