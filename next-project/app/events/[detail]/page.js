'use client'
import EventContent from "@/components/events/events-detail/event-content";
import EventLogistics from "@/components/events/events-detail/event-logistics";
import EventSummary from "@/components/events/events-detail/event-summary";
import { getEventById } from "@/dummy-data";

import { usePathname } from 'next/navigation'
import { Fragment } from "react";

const EventDetailPage = () => {
  
  const pathName = usePathname();
  const eventId = pathName.slice(8);
  console.log(eventId);
  const event = getEventById(eventId);

    if(!event){
      return <p> 이벤트가 존재하지 않습니다. </p>
    }

    return(
      <Fragment>
        <EventSummary title={event.title}></EventSummary>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}></EventLogistics>
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
  export default EventDetailPage;