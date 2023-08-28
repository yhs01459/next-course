'use client';
import classes from './profile-form.module.css';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function ProfileForm() {
  const inputPassword = useRef();
  const inputChangePassword = useRef()
  const router = useRouter();

  const onSubmitHandler =(event) => {
    
    console.log('1. 비밀번호 변경 요청')
    event.preventDefault();

    const data = {
      password:inputPassword.current.value,
      changePassword:inputChangePassword.current.value,
    }

    fetch('/api/user/change-password',
    {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers:{
        'Content-type':'application/json',
      }
    }
    )
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      router.replace('/');
    })

  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={inputChangePassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={inputPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;