import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";


function MainNavigation(){

    const favoriesCtx = useContext(FavoritesContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>My Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites
                        <span className={classes.badge}>{favoriesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;