import NewMeetupForm from "../components/NewMeetupForm";

function NewMeetupPage(){
    const addMeetupHandler = (meetupData) =>{
        fetch(
            '~/meetups.json', 
            {
                method : 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'applycation/json'
                }
            }
        )
    }
    return (<section>
        <h1>NewMeetup page</h1>
        <NewMeetupForm addMeetup={addMeetupHandler}/>
        </section>);
}
export default NewMeetupPage;