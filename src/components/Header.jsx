import React from "react";

function Header() {
  return (
    <header>
        <h1 className="main-title"> Welcome to My Portfolio </h1>
      <h2>Sarah hamzaoui</h2>
      <nav className="connect">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
