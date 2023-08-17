"use client";
import EventFilter from "@/components/events/EventFilter";
import EventList from "@/components/events/EventList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EventsPage = () => {
  
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  
    useEffect(()=>{
    setLoading(true); 
    fetch('https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/enents.json')
    .then((res)=>res.json())
    .then(
      (data)=>{
        const transData = [];
        for (const key in data){
          transData.push({
            id:key,
            date:data[key].date,
            desc:data[key].description,
            image:data[key].image,
            isFeatured:data[key].isFeatured,
            location:data[key].location,
            title:data[key].title,
          })
          setEvents(transData);
     } })
     
    },[]);

 
  if(!loading||!events){
    return(
      <div>
        <h1>이벤트를 불러오는중 입니다. 잠시만 기다려주세요.</h1>
      </div>
    );
  }
  const router = useRouter();

  const searchHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <>
      <EventFilter onSearch={searchHandler}></EventFilter>
      <EventList item={events} />;
    </>
  );
};
export default EventsPage;
