import React from "react";
import "./Profile.css";
// const resume = require("../../Documents/");
const { HeroImg } = require("./HeroImg");

function MyProfile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-text">
        {/* {<h1>  <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" alt=' '></img>Hi There, I'm </h1>} */}
        {/* <p>Hello, my name is</p> */}

        <h1>Rohit Parmar</h1>
        {/* <h1>This are few intro.</h1> */}
        <p className="profile-text">Full Stack Developer</p>
        <p className="profile-text-about">
          I am a dedicated and enthusiastic Master of Computer Applications (MCA) student with a passion
          for technology and a strong desire to excel in the field of computer science. I am constantly
          seeking opportunities to expand my knowledge and skills in various areas of software development,
          programming, and information technology.
        </p>
        <div className="profile-social-links">
          <a
            href="https://github.com/ParmarRohitk"
            target="_blank"
            rel="noopener noreferrer me"
            title="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/parmarrohitk./"
            target="_blank"
            rel="noopener noreferrer me"
            title="Linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        {/* <a href={resume}><button>Resume</button></a> */}
        {/*  <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a> */}
      </div>
      {/* <div className="profile-img img-container">
        <img src={pfp} alt="pfp"></img>
        <div className="img-shade"></div>
      </div> */}

      <HeroImg />
    </div>
  );
}

export default MyProfile;
