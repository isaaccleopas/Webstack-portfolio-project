import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.col}>
            <h2>About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={classes.col}>
            <h2>Contacts</h2>
            <span>Phone: +2347031985506</span>
            <span>Github: isaaccleopas</span>
        </div>
    </div>
  );
}

export default Footer