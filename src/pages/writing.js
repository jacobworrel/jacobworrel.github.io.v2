import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import styles from './writing.module.css';

const articleList = [
  {
    title: 'What to Ask Yourself Before Adding an NPM Package to Your Project',
    link: 'https://medium.freecodecamp.org/what-to-ask-yourself-before-adding-an-npm-package-to-your-project-6b92ba13070d',
  },
  {
    title: 'How to Debug Your Point-Free Code with Ramda',
    link: 'https://itnext.io/how-to-debug-your-point-free-code-with-ramda-5c46bd743781',
  },
  {
    title: 'Advanced React/Redux Techniques | How to Use Refs on Connected Components',
    link: 'https://itnext.io/advanced-react-redux-techniques-how-to-use-refs-on-connected-components-e27b55c06e34',
  },
  {
    title: 'Babel’s Transform Class Properties Plugin: How it Works and What it Means for your React Apps',
    link: 'https://medium.com/@jacobworrel/babels-transform-class-properties-plugin-how-it-works-and-what-it-means-for-your-react-apps-6983539ffc22',
  },
  {
    title: 'ES6 Arrow Functions | What Not To Do',
    link: 'https://medium.com/@jacobworrel/es6-arrow-functions-what-not-to-do-c28c96b4f396',
  },
];

const ArticleLink = ({ link, title }) => (
  <li className={styles.article}>
    <a href={link}>{title}</a>
  </li>
);

const WritingPage = () => (
  <Layout>
    <ul className="portfolio">
      {articleList.map(props => <ArticleLink key={props.title} {...props}/>)}
    </ul>
  </Layout>
);

export default WritingPage
