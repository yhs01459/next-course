
import classes from './main-header.module.css';
import Link from 'next/link'


const MainHeader = () => {
  

    return (
    <header className={classes.header}>
    <div className={classes.logo}>
      <Link href='/'>HOME</Link>
    </div>
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href='/events'>ALL events</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}
export default MainHeader;