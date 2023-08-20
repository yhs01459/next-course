'use client'
import classes from './NewsletterRegistration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {
  const inputEmail = useRef();
  

  function registrationHandler(event) {
    event.preventDefault();
    
    
    const jData = {id:inputEmail.current.value, email:inputEmail.current.value};
    
  
    fetch('/api',{
      method:'POST',
      body: JSON.stringify(jData),
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={inputEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;