import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../../redux/authSlice'
import { request } from '../../util/fetchAPI'
import classes from './signin.module.css'
import Navbar from '../navbar/Navbar'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setEmptyFields(true);
      setTimeout(() => {
        setEmptyFields(false);
      }, 2500);
    }

    try {
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request('/auth/login', "POST", options, { email, password });
      
      dispatch(login(data));
      navigate("/");
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
                  <h2>Sign In</h2>
                  <form
                      onSubmit={handleLogin}
                      className="signIn-form rounded-2 bg-light p-5"
                  >
                      <div className="mb-3">
                          <input
                              type="email"
                              placeholder="Email..."
                              onChange={(e) => setEmail(e.target.value)}
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
                              type="password"
                              placeholder="Password..."
                              onChange={(e) => setPassword(e.target.value)}
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

                      <button type="submit" className="btn btn-primary w-100">
                          Sign In
                      </button>
                      <p className="mt-3">
                          Don't have an account?{' '}
                          <Link to="/signup">Sign Up</Link>
                      </p>
                  </form>
                  {error && (
                      <div className={classes.error}>
                          There was an error signing in! Wrong credentials or
                          server error
                      </div>
                  )}
              </div>
          </div>
      </>
  );
}

export default Signin
