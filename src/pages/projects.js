import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import styles from './projects.module.css';

const projectList = [
  {
    name: 'XC Logic®',
    description: `Conversion Logic's Marketing Analytics Dashboard`,
    link: 'https://www.conversionlogic.com/platform',
    stack: 'React | Redux | Mocha/Chai/Enzyme | Highcharts | Node.js | AWS | Bamboo',
  },
  {
    name: 'codesmith.io',
    description: `Codesmith's Public Website and Online Learning Platform`,
    link: 'https://codesmith.io',
    stack: 'Node.js | SASS | Travis CI',
  },
  {
    name: 'AC-D3',
    description: 'JavaScript Library for Rendering Dynamic Media Visualizations Inside D3',
    link: 'http://ac-d3.com',
    stack: 'D3 | Jasmine | YouTube & Vimeo APIs',
  },
  {
    name: 'React Windowed Select',
    description: 'Integration of React Window with React Select V2 to Efficiently Render Large Lists',
    link: 'https://github.com/jacobworrel/react-windowed-select',
    stack: 'React | Jest/Enzyme | Travis CI | Coveralls',
  },
  {
    name: 'JS vs. Elm',
    description: 'A Side by Side Syntax Comparison Between JavaScript and Elm',
    link: 'https://github.com/jacobworrel/js-vs-elm',
  },
];

const Project = ({ link, name, description, stack }) => (
  <li>
    <h1 className={styles.header}><a href={link}>{name}</a></h1>
    <div className={styles.info}>
      <p><span className={styles.label}>Description</span>: {description}</p>
      { stack &&
        <p><span className={styles.label}>Tools</span>: {stack}</p>
      }
    </div>
  </li>
);

const ProjectsPage = () => (
  <Layout>
    <ul className="portfolio">
      {projectList.map(props => <Project key={props.name} {...props}/>)}
    </ul>
  </Layout>
);

export default ProjectsPage
