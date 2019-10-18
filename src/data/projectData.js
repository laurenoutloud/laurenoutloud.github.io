import boggleImage from "../images/projects/boggle.jpg";
import MakeOrderImage from "../images/projects/makeorderrequest.png";
import safeTouchImage from "../images/projects/safetouch.jpg";
import selfCheckoutImage from "../images/projects/selfcheckout.jpg";
import studyStationImage from "../images/projects/studystation.jpg";
import personalWebsiteImage from "../images/projects/website.png";
import whnImage from "../images/projects/whn.jpg";

const PROJECT_DATA = {
  projects: [
    {
      image: safeTouchImage,
      title: "SafeTouch",
      text:
        "SafeTouch is a two component system consisting of a small hardware device that can be paired with an Android application. The hardware device will have a button to press when the user feels they are in a dangerous situation. It will communicate with the phone via Bluetooth which will then send an emergency message to the user’s emergency contacts. The application will feature three modes: personal mode, medical mode, and parent mode."
    },
    {
      image: whnImage,
      title: "What's HappNin.",
      text:
        "What’s HappNin is an application designed for anyone who is interested in connecting instantaneously with their friends based on their real-time location and activities that are currently taking place."
    },
    {
      image: selfCheckoutImage,
      title: "Self Checkout Simulator",
      text:
        "This project is a self checkout simulator that replicates the activities of a standard self checkout machine. More information can be found here."
    },
    {
      image: MakeOrderImage,
      title: "Make Order Request.",
      text:
        "For my Software Engineering 1 course I had to design and develop an interactive web application using use case models. The application was designed to simulate an online shopping website."
    },
    {
      image: studyStationImage,
      title: "Study Station. ",
      text:
        " Study Station is a web application that is designed to help students plan and organize their study time. Study Station seeks to eliminate distractions and increase productivity by creating a platform that combines the Kanban techique with the Pomodoro technique. The Kanban technique is a workflow methodology that organizes tasks into three categories: To Do, Doing, and Done. The Pomodoro technique is a time management procedure that breaks down tasks into short bursts of productivity followed by short breaks. I utilized the MVC5 (Model View Controller) framework to develop this application."
    },
    {
      image: personalWebsiteImage,
      title: "Personal Website.",
      text:
        "This my own personal website that I built from scratch. I know there are a ton of website builders and template generators out there, but I thought it would be more fun to develop a website on my own."
    },
    {
      image: boggleImage,
      title: "Boggle Replica. ",
      text:
        "As part of my object oriented programming class, I created a digital replica of the Boggle board game as a Java Application."
    }
  ]
};

export { PROJECT_DATA };
