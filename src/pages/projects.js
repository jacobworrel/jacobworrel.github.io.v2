import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './projects.module.css';

const projectList = [
  {
    name: 'React Windowed Select',
    description: 'With ~10K weekly NPM downloads, react-windowed-select optimizes performance of the popular react-select component using virtualization. Written in TypeScript, fully tested with Jest and Cypress.',
    link: 'https://github.com/jacobworrel/react-windowed-select',
    stack: 'React | Jest/Enzyme | Cypress | TypeScript | Storybook | Travis CI | Coveralls',
  },
  {
    name: 'NPM Package Stats',
    description: 'A CLI tool that gets stats on NPM packages.',
    link: 'https://www.npmjs.com/package/npm-pkg-stats',
    stack: 'Node.js',
  },
  {
    name: 'Joi Markdown Generator',
    description: 'A markdown generator from @hapi/joi schemas.',
    link: 'https://www.npmjs.com/package/joi-md-doc',
    stack: 'Node.js',
  },
  {
    name: 'Covid-19 Dashboard',
    description: 'COVID-19 data visualization dashboard using global data from Johns Hopkins University and state and county level data from NY Times.',
    link: 'https://goofy-agnesi-0d5e9a.netlify.app/',
    stack: 'React | Highcharts',
  },
  {
    name: 'AC-D3',
    description: 'JavaScript Library for Rendering Dynamic Media Visualizations Inside D3',
    link: 'https://github.com/AC-D3/AC-D3',
    stack: 'D3 | Jasmine | YouTube & Vimeo APIs',
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
    <SEO title="Projects" keywords={[`Jacob Worrel`, `JavaScript Developer`]} />
    <ul className="portfolio">
      {projectList.map(props => <Project key={props.name} {...props}/>)}
    </ul>
  </Layout>
);

export default ProjectsPage
