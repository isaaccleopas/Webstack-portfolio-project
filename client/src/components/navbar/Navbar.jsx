import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import {BsHouseDoor} from 'react-icons/bs';

const Navbar = () => {
  return (
      <>
          <nav class="navbar navbar-expand-lg navbar-dark text-light py-4 position-fixed top-0 w-100">
              <div class="container-xl">
                  <Link class="navbar-brand" to="/">
                      I&D Properties <BsHouseDoor/>
                  </Link>
                  <button
                      class="navbar-toggler d-lg-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#mobileMenu"
                  >
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="mobileMenu">
                      <ul class="navbar-nav ms-auto mt-2 mt-lg-0 align-items-md-center">
                          <li class="nav-item navList">
                              <Link class="nav-link active" to="/">
                                  Home
                              </Link>
                          </li>
                          <li class="nav-item navList">
                              <Link class="nav-link" href="#listing">
                                  Listings
                              </Link>
                          </li>
                          <li class="nav-item navList">
                              <Link class="nav-link" href="#about">
                                  About
                              </Link>
                          </li>
                          <li class="nav-item navList">
                              <Link class="nav-link" href="#stat">
                                  Stats
                              </Link>
                          </li>
                          <li class="nav-item px-md-3">
                              <Link
                                  to="/signup"
                                  class="signUp-btn btn text-decoration-none nav-link px-5"
                              >
                                  Sign Up
                              </Link>
                          </li>
                          <li class="nav-item mt-3 mt-sm-3 mt-md-0">
                              <Link
                                  to="/signin"
                                  class="btn border border-3 nav-link px-5"
                              >
                                  Sign in
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          {/* <div className={classes.container}>
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
                      <Link to="/signup">Sign Up</Link>
                      <Link to="/signin">Sign In</Link>
                  </div>
              </div>
          </div> */}
      
       </>
  );
}

export default Navbar