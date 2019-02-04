import { Link } from 'gatsby';
import React from "react";

const Intro = () => (
  <div className="row">
    <div className="col-md-10 mr-auto">
      <p>Howdy ho! My name is Jacob.</p>
      <p>
        I'm a software engineer specialized in full stack web development. I currently work on Conversion Logic's <a href="https://www.conversionlogic.com/platform/">marketing analytics platform</a>.
      </p>
      <p>
        Recent interests include <a href="https://medium.com/@dabit3/full-stack-development-in-the-era-of-serverless-computing-c1e49bba8580">Serverless Computing</a> and <a href="https://elm-lang.org">Elm</a>.
      </p>
      <hr className="my-4"/>
      <p>
        I wrote a JavaScript library called <a href="http://ac-d3.com/">AC-D3</a> that renders
        dynamic media visualizations inside of D3. The project was featured in <a href="http://javascriptweekly.com/issues/342">JavaScript Weekly</a>.
      </p>
      <p>
        I love <Link to="/writing">writing</Link> and giving talks about technology. I was invited
        to speak at <a href="https://www.meetup.com/socal-react/">SoCal React</a> on the trade offs between rendering
        D3 charts in SVG vs. HTML5 Canvas.
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