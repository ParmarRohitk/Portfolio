import React from "react";
import "./Footer.css";

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer">
      <p>&copy; {getCurrentYear()}</p>
      <p>
        Make by <a href="https://prk.godaddysites.com/" rel="noopener noreferrer">PRK</a>
      </p>
    </footer>
  );
}

export default Footer;
