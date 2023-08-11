import Card from "./ui/Card";
import classes from './NewMeetupForm.module.css';
import { useRef } from "react";


const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const getTitle = titleInputRef.current.value;
        const getImage = imageInputRef.current.value;
        const getAddress = addressInputRef.current.value;
        const getDesc = descInputRef.current.value;
       
        const meetupData = {
            title: getTitle,
            image: getImage,
            address: getAddress,
            desc: getDesc,
        };

        props.addMeetup(meetupData);
    }

    
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id ='title' ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Neetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id ='address' ref ={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='desc'>Description</label>
                    <textarea id='desc' required rows='5' ref = {descInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>
                        Add Meetup
                    </button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;