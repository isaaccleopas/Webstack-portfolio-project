import React, { useState } from 'react';
import classes from './signup.module.css';
import { request } from '../../util/fetchAPI';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

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
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="username" placeholder="Username..." onChange={handleState} />
          <input type="email" name="email" placeholder="Email..." onChange={handleState} />
          <input type="tel" name="contact" placeholder="Phone..." onChange={handleState} />
          <input type="password" name="password" placeholder="Password..." onChange={handleState} />
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
        {error && (
          <div className={classes.error}>There was an error signing up! Try again.</div>
        )}
        {emptyFields && (
          <div className={classes.error}>Fill all fields!</div>
        )}
      </div>
    </div>
  );
};

export default Signup;