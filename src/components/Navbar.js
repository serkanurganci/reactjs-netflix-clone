import React, { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [showNavBlack, setShowNavBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavBlack(true);
      } else {
        setShowNavBlack(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`navbar ${showNavBlack && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <img
        className="navbar__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="logo"
      />
    </div>
  );
}

export default Navbar;
