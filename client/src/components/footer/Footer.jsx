import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
      <>
          <footer className="footer section">
              <div className="container-lg"></div>
              <div className="container">
                  <div className="row gap-2 m-auto justify-content-center">
                      <div className="col-12 text-center w-50">
                          <h2>About Us</h2>
                          <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                          </p>
                      </div>
                      <div className="col-12 text-center">
                          <h2>Contacts</h2>
                          <span>Phone: +2347031985506</span>
                          <span>Github: isaaccleopas</span>
                      </div>
                  </div>
              </div>
          </footer>
          {/* <div className={classes.wrapper}>
              <div className={classes.col}>
                  <h2>About Us</h2>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </p>
              </div>
              <div className={classes.col}>
                  <h2>Contacts</h2>
                  <span>Phone: +2347031985506</span>
                  <span>Github: isaaccleopas</span>
              </div>
          </div> */}
      </>
  );
}

export default Footer