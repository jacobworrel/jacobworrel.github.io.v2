import React from "react"
import PropTypes from "prop-types"
import styles from './social.module.css';

const social = [
  {
    id: 'github',
    link: 'https://github.com/jacobworrel',
  },
  {
    id: 'twitter',
    link: 'https://twitter.com/jacob_worrel',
  },
  {
    id: 'medium',
    link: 'https://medium.com/@jacobworrel',
  },
  // {
  //   id: 'angellist',
  //   link: 'https://angel.co/jacob-worrel',
  // },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/jacobworrel',
  },
];

const SocialIcon = ({ id, link }) => (
  <li>
    <a href={link}>
      <i className={`fab fa-${id} fa-fw fa-2x ${styles.fab}`}/>
    </a>
  </li>
);

SocialIcon.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
};

const Social = () => (
  <div className={styles.container}>
    <ul className={styles.listInline}>
      {social.map(props => <SocialIcon {...props} />)}
    </ul>
  </div>
);

export default Social;