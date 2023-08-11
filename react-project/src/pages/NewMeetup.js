import NewMeetupForm from "../components/NewMeetupForm";
import { useNavigate} from "react-router-dom";
function NewMeetupPage(){

    const navigate = useNavigate();
    const addMeetupHandler = (meetupData) =>{
        fetch(
            'https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', 
            {
                method : 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'applycation/json'
                }
            }).then(()=>{navigate('/');})
    }
    return (<section>
        <h1>NewMeetup page</h1>
        <NewMeetupForm addMeetup={addMeetupHandler}/>
        </section>);
}
export default NewMeetupPage;