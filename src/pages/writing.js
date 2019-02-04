import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const articleList = [
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
  <li className="article">
    <a href={link}>{title}</a>
  </li>
);

const WritingPage = () => (
  <Layout>
    <ul className="portfolio">
      {articleList.map(props => <ArticleLink {...props}/>)}
    </ul>
  </Layout>
);

export default WritingPage
