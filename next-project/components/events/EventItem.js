import Link from "next/link";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
    const { id, title,location,date,image } = props;
    const readDate = new Date(date).toLocaleDateString(
        'en-us',
        {
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );
    const address = location.replace(', ','\n ');
return(
    <li className={classes.item}>
        <img src={'/'+ image} alt={title}></img>
        <div className={classes.content}>
            <div>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                {readDate}
            </div>
            <div className={classes.address}>
                {address}
            </div>
        </div>
            <div className={classes.actions}>
                <Link href={`/events/${id}`}>explore event</Link>
            </div>
    </li>
)
}
export default EventItem;