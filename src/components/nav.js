import { Link } from 'gatsby';
import Logo from './logo';
import React from "react"
import styles from './nav.module.css';

const pageList = [
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'writing',
    label: 'Writing',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];

const NavItem = ({ id, label }) => (
  <li className={styles.navItem}>
    <Link to={`/${id}`} id={id} className="nav-link">{label}</Link>
  </li>
);

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Logo />

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {pageList.map(props => <NavItem key={props.id} {...props} />)}
      </ul>
    </div>
  </nav>
);

export default Nav;