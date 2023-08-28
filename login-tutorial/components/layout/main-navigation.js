'use client';
import Link from 'next/link';


import classes from './main-navigation.module.css';
import { signOut, useSession } from 'next-auth/react';

function MainNavigation() {
  const logOut = () => {
    signOut();
  }
  const {data:session, state} = useSession();
  return (
    <header className={classes.header}>
      <Link href='/'>
          <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
        {!session && (<li>
            <Link href='/auth'>Login</Link>
          </li>)}
          
         {session && (<li>
            <Link href='/profile'>Profile</Link>
          </li>)}
          
        {session && ( <li>
            <button onClick={logOut}>Logout</button>
          </li>)}
         
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;