
import classes from "./EventItem.module.css";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/Button";
import Image from "next/image";

const EventItem = (props) => {
    const { id, title,location,date,image } = props;
    const toEventListPage = `/events/${id}`;
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
        <Image src={'/'+ image} alt={title} width={400} height={160}></Image>
        <div className={classes.content}>
            <div>
                <h2>{title}</h2>
            </div>
            
            <div className={classes.date}>
            <DateIcon></DateIcon>
                {readDate}
            </div>
            
            <div className={classes.address}>
            <AddressIcon></AddressIcon>
                {address}
            </div>
        </div>
            <div className={classes.actions}>
                <Button link={toEventListPage}>
                    <span>explore event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span></Button>
            </div>
    </li>
)
}
export default EventItem;