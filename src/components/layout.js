import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Social from './social';
const Layout = ({ children }) => (
  <div className="container">
    <Nav/>
    <div className="jumbotron">{children}</div>
    <Social/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
