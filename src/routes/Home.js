import React from "react";
import "../css/Home.css";
import selfPhoto from "../images/graduate-photo.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img className="homePhoto" src={selfPhoto} alt="Graduation Photo" />
          <h2>Insightful. Versatile. Ambitious.</h2>
          <p>
            "The only thing that stands between a person and what they want in
            life is the will to try and the faith to believe it is possible."
            -Rich DeVos
          </p>
        
      </div>
    );
  }
}

export default Home;
