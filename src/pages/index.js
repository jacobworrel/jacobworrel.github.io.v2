import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jacob Worrel`, `JavaScript Developer`]} />
    <Intro/>
  </Layout>
);

export default IndexPage
