import { Link } from "gatsby"
import React from "react"
import './name-animation.css';

const Logo = () => (
  <>
    <Link to="/" className="navbar-brand">
      <div className="clip-text clip-text_twelve clip-text--cover">Jacob Worrel</div>
    </Link>
    <button
      className="navbar-toggler mx-auto"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"/>
    </button>
  </>
);

export default Logo;