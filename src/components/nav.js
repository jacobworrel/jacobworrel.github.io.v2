import React from "react"
import Logo from './logo';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Logo />

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a id="projects" className="nav-link" href="./views/projects.html">Projects</a>
        </li>
        <li className="nav-item">
          <a id="writing" className="nav-link" href="./views/writing.html">Writing</a>
        </li>
        <li className="nav-item">
          <a id="contact" className="nav-link" href="./views/contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;