import everdayGamesImage from "../images/everydayGames.jpg"
import restaurantMenuImage from "../images/projects/restaurantMenu.jpg";
import MakeOrderImage from "../images/projects/makeorderrequest.png";
import safeTouchImage from "../images/projects/safetouch.jpg";
import selfCheckoutImage from "../images/projects/selfcheckout.jpg";
import studyStationImage from "../images/projects/studystation.jpg";
import randomVideoPlayerImage from "../images/projects/randomVideoPlayer.jpg";
import personalWebsiteImage from "../images/projects/website.png";
import timelineImage from "../images/projects/timeline.jpg";
import bulletinBoardImage from "../images/projects/bulletinBoard.jpg";
import safeTouchPDF from "../documents/SafeTouch_SRS.pdf";
import studyStationPDF from "../documents/StudyStationFall2016Portfolio.pdf";
import flashCardAppImage from "../images/projects/flashcardapp.png";

const PROJECT_DATA = {
  projects: [
    {
      image: flashCardAppImage,
      title: "Flash Card App",
      techStack: "Amazon Web Services",
      text:"Flash card application built using Amazon S3, Amazon API Gateway, AWS Lambda, and Amazon DynamoDB",
      codeLink: "https://github.com/laurenoutloud/flashcard-web-app",
      liveLink: "http://lauren-flashcard-app.s3-website-us-east-1.amazonaws.com/"
    },
    {
      image: bulletinBoardImage,
      title: "Bulletin Board",
      techStack: "CSS, JavaScript",
      text:"Web application lets you view, add, and delete messages from a bulletin board",
      codeLink: "https://github.com/laurenoutloud/bulletin-board",
      liveLink: "https://laurenoutloud.github.io/bulletin-board/"
    },
    {
      image: randomVideoPlayerImage,
      title: "Random Video Player",
      techStack: "REST, JavaScript, YouTube API, Random Word API",
      text:"Web application that uses random word API to generate random YouTube videos from YouTube Data API",
      codeLink: "https://github.com/laurenoutloud/random-video-player",
      liveLink: "https://laurenoutloud.github.io/random-video-player/"
    },
    {
      image: timelineImage,
      title: "Timeline",
      techStack: "REST, JavaScript, HTML, CSS",
      text:"Timeline web application integrated with JSONPlaceholder REST API to generate sample data",
      codeLink: "https://github.com/laurenoutloud/timeline",
      liveLink: "https://laurenoutloud.github.io/timeline/"
    },
    {
      image: restaurantMenuImage,
      title: "Restaurant Menu",
      techStack: "Firebase, JavaScript, HTML, CSS",
      text:"Simple restaurant menu app to practice integrating web apps with Firebase.",
      codeLink: "https://github.com/laurenoutloud/restaurant-menu",
      liveLink: "https://laurenoutloud.github.io/restaurant-menu/"
    },
    {
      image: personalWebsiteImage,
      title: "Personal Website",
      techStack: "React, Reactstrap, JavaScript, HTML, CSS",
      text:"This my own personal website that I built from scratch. I know there are a ton of website builders and template generators out there, but I thought it would be more fun to develop a website on my own.",
      codeLink: "https://github.com/laurenoutloud/laurenoutloud.github.io",
      liveLink: "https://laurenoutloud.github.io/"
    },
      {
          image: everdayGamesImage,
          title: "Everyday Games",
          techStack: "React, Reactstrap, JavaScript, HTML, CSS",
          text: "Everyday Games is a simple website for playing simple games. It is currently in the early stages of development, and has very little functionality. I am working on setting it up to become a small open source project.",
          codeLink: "https://github.com/laurenoutloud/everyday-games",
          liveLink: "https://laurenoutloud.github.io/everyday-games/"
      },
      
    {
      image: safeTouchImage,
      title: "SafeTouch",
      techStack: "C, Arduino Create",
      text:
        "SafeTouch is a two component system consisting of a small hardware device that pairs with an Android application via Bluetooth. Users use a button to automatically send an emergency message to their designated contacts in the case of an emergency.",
        documentationLink: safeTouchPDF,
    },
    {
      image: selfCheckoutImage,
      title: "Self Checkout Simulator",
      techStack: "Java, JSP, MySql, OOP",
      text:
        "This project is a self checkout simulator that replicates the activities of a standard self checkout machine.",
        codeLink: "https://github.com/theSaltyConditional/SE1_finalProject_2017_"
    },
    {
      image: MakeOrderImage,
      title: "Make Order Request",
      techStack: "Java",
      text:
        "For my Software Engineering 1 course I had to design and develop an interactive web application using use case models. The application was designed to simulate an online shopping website.",
        codeLink: "https://github.com/laurenoutloud/SchoolProjects/tree/master/HW3MakeOrderRequest"
    },
    {
      image: studyStationImage,
      title: "Study Station",
      techStack: "MVC, Bootstrap, C#, HTML, CSS, ASP.NET",
      text:
        " Study Station is a web application that is designed to help students plan and organize their study time. Study Station seeks to eliminate distractions and increase productivity by creating a platform that combines the Kanban techique (organizing tasks by To Do, Doing, Done) with the Pomodoro technique (short bursts of productivity followed by short breaks).",
      documentationLink: studyStationPDF,
      codeLink: "https://github.com/laurenoutloud/StudyStation"
    },
  ]
};

export { PROJECT_DATA };
