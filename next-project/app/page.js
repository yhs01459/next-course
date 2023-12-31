import EventList from "@/components/events/EventList";
import NewsletterRegistration from "@/components/input/NewsletterRegistration";

export const metadata = {
  title: "HomePage",
  description: "homepage",
};

const HomePage = async () => {
  const getEvents = await getData();

  return (
    <div>
      <NewsletterRegistration />
      <EventList item={getEvents}></EventList>
    </div>
  );
};
export default HomePage;

export const getData = async () => {
  const response = await fetch(
    `https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/enents.json`,
    { next: { revalidate: 100 } }
  );
  const data = await response.json();
  const transData = [];
  for (const key in data) {
    if (data[key].isFeatured == true) {
      transData.push({
        id: key,
        date: data[key].date,
        desc: data[key].description,
        image: data[key].image,
        isFeatured: data[key].isFeatured,
        location: data[key].location,
        title: data[key].title,
      });
    }
  }
  return transData;
};
