'use client'
import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const router = useRouter();
 

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if(isLogin){
      
      signIn('credentials', {
        redirect: false,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      })
      .then((result)=>{
        if(!result.error){
          router.replace('/');
        }
        else{
          console.log('로그인 실패')
        }
      }
      )
    }
    else{
      fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({
            email: inputEmail.current.value,
            password: inputPassword.current.value,
        }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
    
    }
    
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