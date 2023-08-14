
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import Link from "next/link";
const EventsPage = () => {
    const events = getAllEvents();

    return(
      <EventList item ={events}/>
    );
  }
  export default EventsPage;