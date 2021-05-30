import { Link } from 'gatsby';
import React from "react";

const Intro = () => (
  <div className="row">
    <div className="col-md-10 mr-auto">
      <p>Howdy ho! My name is Jacob.</p>
      <p>
        I'm a software engineer specialized in full stack web development.
        I currently work on Innovid's <a href="https://www.innovid.com/marketer-solutions/measurement-solutions/">measurement products</a>,
        building user interfaces and backend services that provide advertisers with valuable insights into campaign performance.
      </p>
      <p>
        Recent interests include functional programming and TypeScript.
      </p>
      <hr className="my-4"/>
      <p>
        In my free time, I like to tinker on open source. I'm the lead developer and maintainer of <a href="https://www.npmjs.com/package/react-windowed-select">react-windowed-select</a>,
        a virtualized select component with ~10K weekly downloads on NPM.
      </p>
      <p>
        I also love <Link to="/writing">writing</Link>.
        I've contributed to <a href="https://medium.freecodecamp.org/">freeCodeCamp</a> and <a href="https://itnext.io/">ITNEXT</a>.
      </p>
      <hr className="my-4"/>
      <p>
        I watch <a href="https://letterboxd.com/jacobworrel/">a lot</a> of movies and enjoy taking <a
        href="https://www.instagram.com/jacobworrel/">pictures</a> of things.
      </p>
    </div>
  </div>
);

export default Intro;