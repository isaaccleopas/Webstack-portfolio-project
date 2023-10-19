import React, { useState } from 'react';
import classes from './signup.module.css';
import { request } from '../../util/fetchAPI';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';

const Signup = () => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (Object.values(state).some((v) => v === '')) {
      setEmptyFields(true);
      setTimeout(() => {
        setEmptyFields(false);
      }, 2500);
      return;
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      const data = await request('/auth/register', 'POST', headers, { ...state });

      dispatch(register(data));
      navigate('/');
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      console.error(error);
    }
  };

  return (
    <>
        <Navbar/>
          <div className="signUp container-fluid w-100">
              <div className="container-lg d-flex flex-column justify-content-center align-items-center">
                  <h2>Sign Up</h2>
                  <form className="signUp-form rounded-2 bg-light p-5" onSubmit={handleRegister}>
                      <div className="mb-3">
                          <input
                              type="text"
                              name="username"
                              placeholder="username..."
                              onChange={handleState}
                              className="form-control"
                          />
                          <small className="text-danger error">
                              {emptyFields && (
                                  <div className={classes.error}>
                                      Username required!
                                  </div>
                              )}
                          </small>
                      </div>
                      <div className="mb-3">
                          <input
                              type="email"
                              name="email"
                              placeholder="Email..."
                              onChange={handleState}
                              className="form-control"
                          />
                          <small className="text-danger error">
                              {emptyFields && (
                                  <div className={classes.error}>
                                      Email address required!
                                  </div>
                              )}
                          </small>
                      </div>
                      <div className="mb-3">
                          <input
                              type="text"
                              name="contact"
                              placeholder="phone"
                              onChange={handleState}
                              className="form-control"
                          />
                          <small className="text-danger error">
                              {emptyFields && (
                                  <div className={classes.error}>
                                      Phonexxxx required!
                                  </div>
                              )}
                          </small>
                      </div>
                      <div className="mb-3">
                          <input
                              type="password"
                              name="pass"
                              placeholder="Password..."
                              onChange={handleState}
                              className="form-control"
                          />
                          <small className="text-danger error">
                              {emptyFields && (
                                  <div className={classes.error}>
                                      Password required!
                                  </div>
                              )}
                          </small>
                      </div>
                      <button className='btn btn-primary w-100' type="submit">Register</button>
                      <p className='mt-3'>
                          Already have an account?{' '}
                          <Link to="/signin">Sign In</Link>
                      </p>
                  </form>
                  {error && (
                      <div className={classes.error}>
                          There was an error signing up! Try again.
                      </div>
                  )}
              </div>
          </div>
      </>
  );
};

export default Signup;