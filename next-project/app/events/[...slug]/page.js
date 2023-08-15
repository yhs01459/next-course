'use client';
import EventList from "@/components/events/EventList";
import { usePathname } from "next/navigation";
import { getFilteredEvents } from "@/dummy-data";
const EventFilterPage = () => {
   const path = usePathname();
   
   const getYearBySegment = path.slice(8,12);
   const getMonthBySegment = path.slice(14);
   const numYear = +getYearBySegment;
   const numMonth = +getMonthBySegment;
   const fiteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth
   });

    return(
      <div>
        <EventList item={fiteredEvents}></EventList>
      </div>
    )
  }
  export default EventFilterPage;