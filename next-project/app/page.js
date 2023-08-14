import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const getEvents = getFeaturedEvents();
  return(
    <div>
      <h1>WELCOME HOME PAGE</h1>
      <EventList item = {getEvents}></EventList>
    </div>
  )
}
export default HomePage;
