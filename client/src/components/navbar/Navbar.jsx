import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import {BsHouseDoor} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.left}>
          ID Properties <BsHouseDoor />
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Listings</li>
          <li className={classes.listItem}>Stats</li>
        </ul>
        <div className={classes.right}>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar