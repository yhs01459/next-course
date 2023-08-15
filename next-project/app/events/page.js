"use client";
import EventFilter from "@/components/events/EventFilter";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/navigation";

const EventsPage = () => {
  const events = getAllEvents();
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
