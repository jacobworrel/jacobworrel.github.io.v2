import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Social from './social';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/styles.css';

class Layout extends React.Component {
  // https://github.com/gatsbyjs/gatsby/issues/11464
  componentDidMount () {
    require('bootstrap');
  }

  render () {
    return (
      <div className="container">
        <Nav/>
        <div className="jumbotron">{this.props.children}</div>
        <Social/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
