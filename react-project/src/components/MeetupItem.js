import classes from './MeetupItem.module.css';
import Card from '../components/ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';


const MeetupItem = (props) => {

    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {
    if(itemIsFavorite) {
        favoritesCtx.removeFavorite(props.id);
    }else{
        favoritesCtx.addFavorite({
            id:props.id,
            title:props.title,
            image:props.image,
            desc:props.desc,
            address:props.address,
        })
    }
    };

    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>   
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.desc}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
            </div>
            </Card>

        </li>

    );
}
export default MeetupItem;