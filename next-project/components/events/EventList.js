import EventItem from "./EventItem";
import classes from "./EventList.module.css";
const EventList = (props) => {
    const {item} = props;
    console.log(props);
    return (
        <ul className={classes.list}>
        {item.map((i)=>(
           
                <EventItem 
                key = {i.id}
                id = {i.id} 
                title={i.title} 
                location={i.location} 
                date={i.date}
                image={i.image}>

                </EventItem>
            
        ))}
        </ul>
       
    )
}

export default EventList;