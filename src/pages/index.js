import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/styles.css';

const IndexPage = () => (
  <Layout>
    <Intro/>
  </Layout>
);

export default IndexPage
