import { Link } from "gatsby"
import React from "react"
import {
  clipText,
  clipTextCover,
  clipTextTwelve,
} from './logo.module.css';

const logoClass = `${clipText} ${clipTextCover} ${clipTextTwelve}`;

const Logo = () => (
  <>
    <Link to="/" className="navbar-brand">
      <div className={logoClass}>Jacob Worrel</div>
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