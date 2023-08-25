'use client'
import { useState, useRef } from 'react';
import classes from './auth-form.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmail = useRef();
  const inputPassword = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  const submitHandler = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({
            email: inputEmail.current.value,
            password: inputPassword.current.value,
        }),
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={inputEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={inputPassword} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;