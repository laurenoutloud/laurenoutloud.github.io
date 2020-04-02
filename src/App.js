import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./routes/About";
import Projects from "./routes/Projects";
import NavigationBar from "./components/NavigationBar";
import "./css/App.css";

class App extends React.Component {
  render() {
    document.body.style.backgroundColor = "adad85"; //TODO: move somewhere better
    return (
      <div className="app">
        <NavigationBar/>
        <div className="content">
          <Switch>
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/" render={() => <Projects />} />
            <Route exact path="/projects" render={() => <Projects />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
