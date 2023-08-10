import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';
const MeetupList = (props) => {
    return (
        <div >
            <ul className={classes.list}>
                {props.meetups.map(meetup=>{
                    return <MeetupItem
                    key = {meetup.id}
                    id ={meetup.id}
                     title={meetup.title}
                     image={meetup.image}
                     address={meetup.address}
                     desc={meetup.desc}
                     />
                    })}
            </ul>
        </div>
    ); 
}
export default MeetupList;