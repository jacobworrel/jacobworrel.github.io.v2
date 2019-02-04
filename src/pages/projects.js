import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projectList = [
  {
    name: 'AC-D3',
    description: 'JavaScript Library for Building AudioVisual Charts in D3',
    link: 'http://ac-d3.com',
    stack: 'D3 | JavaScript/ES6 | Jasmine | YouTube & Vimeo APIs | AWS',
  }
];

const Project = ({ link, name, description, stack }) => (
  <li>
    <a href={link}>{name}{description ? `: ${description}` : ''}</a>
    <p className="tech-stack">{stack}</p>
  </li>
);

const ProjectsPage = () => (
  <Layout>
    <ul className="portfolio">
      {projectList.map(props => <Project {...props}/>)}
    </ul>
  </Layout>
);

export default ProjectsPage
