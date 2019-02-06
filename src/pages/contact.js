import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div className="row">
      <div className="col-md-10 mr-auto">
        <p>Drop me a line at <a href="mailto:jacobworrel@gmail.com">jacobworrel@gmail.com</a>.</p>
        <hr className="my-4"/>
          <p>
            Check out my photography on <a href="https://www.instagram.com/jacobworrel/">Instagram</a> or follow me on <a
            href="https://letterboxd.com/jacobworrel/">Letterboxd</a> to see what kind of movies I'm into.
          </p>
      </div>
    </div>
  </Layout>
);

export default ContactPage
