import React from "react";
import "../contactMe/ContactMe.css";

function ContactMe() {
  return (
    <>
      <section className="contactme" id="contact">
        <div className="contactme-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contactme-desc">
          <p>
            Although my focus lies on personal growth and ongoing projects, I
            Feel free to reach out to me! I'm open to collaboration and new opportunities. Whether you're interested in discussing a project, exploring a partnership, or simply want to connect, you can contact me via email or connect with me on LinkedIn.


          </p>
        </div>
        <a href="mailto:parmarrohitk.01@gmail.com">
          <button>Say Hello</button>
        </a>

        <h3 className="thank">  Thank you for visiting my portfolio. Let's turn ideas into reality through code and creativity!</h3>

      </section>

    </>
  );
}

export default ContactMe;
