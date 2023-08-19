
import EventContent from "@/components/events/events-detail/event-content";
import EventLogistics from "@/components/events/events-detail/event-logistics";
import EventSummary from "@/components/events/events-detail/event-summary";
import { Fragment } from "react";

export const metadata = {
  title: "Event Detail Page",
  description:"event_detail_page",
}

const EventDetailPage = async(props) => {
  
  
  const getEvent = await getData(props.params);
  const event = getEvent[0];
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

  export const getData = async(params) => {
    const eventId = params.detail;
    const response = await fetch(`https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/enents.json`);
    const data = await response.json();
    const transData = [];
    for (const key in data){
      if(eventId==key){
        
        transData.push({
          id:key,
          date:data[key].date,
          desc:data[key].description,
          image:data[key].image,
          isFeatured:data[key].isFeatured,
          location:data[key].location,
          title:data[key].title,
        })
      }
    };
    return transData;
  
  }