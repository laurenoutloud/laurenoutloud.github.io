import React from "react";
import {Switch, Route } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Projects from "./routes/Projects";
import "./css/App.css";

class App extends React.Component{
  render(){
    document.body.style.backgroundColor = "adad85"; //TODO: move somewhere better
    return(
      <div className="app">
      <Switch>
        <Route exact path="/about" render={()=> <About />} />
        <Route exact path="/contact" render={()=><Contact/>} />
        <Route exact path="/" render={()=><Home />} />
        <Route exact path="/projects" render={()=> <Projects />} />
        <Route exact path="/resume" render={()=><Resume/>} />
      </Switch>
      </div>
    );
  }
}

export default App;