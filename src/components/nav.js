import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="./index.html">
      <div className="clip-text clip-text_twelve clip-text--cover">Jacob Worrel</div>
    </a>
    <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a id="projects" className="nav-link" href="./views/projects.html">Projects</a>
        </li>
        <li className="nav-item">
          <a id="writing" className="nav-link" href="./views/writing.html">Writing</a>
        </li>
        <li className="nav-item">
          <a id="readings" className="nav-link" href="./views/readings.html">Readings</a>
        </li>
        <li className="nav-item">
          <a id="contact" className="nav-link" href="./views/contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);