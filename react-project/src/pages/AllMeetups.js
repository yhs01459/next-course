import MeetupList from "../components/MeetupList";

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
    return (
        <div>
         <h1>All Meetups page</h1>
         <MeetupList meetups={DUMMY_DATA}></MeetupList>
        </div>
    );
}
export default AllMeetupsPage;