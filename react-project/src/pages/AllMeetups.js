import MeetupList from "../components/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://cdn.pixabay.com/photo/2023/07/28/18/23/bird-8155768_1280.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://cdn.pixabay.com/photo/2023/07/28/18/23/bird-8155768_1280.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage(){
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    fetch('https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then((response)=> {return response.json();})
    .then((data)=>{
      const meetups = [];
      for (const key in data){
        const meetup = {
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);

   

    if(loading){
      return <section>
        <p>loading...</p>
      </section>
    }

    return (
        <div>
         <h1>All Meetups page</h1>
         <MeetupList meetups={loadedMeetups}></MeetupList>
        </div>
    );
}
export default AllMeetupsPage;