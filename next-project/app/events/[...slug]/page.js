
import EventList from "@/components/events/EventList";

export const metadata = {
  title: "Filterd Page",
  description:"filteredpage",
  }

const EventFilterPage = async (props) => {
  const filterdEvents = await getData(props.params);

    
    return(
      <div>
  
        <EventList item={filterdEvents}></EventList>
      </div>
    )
  }
  export default EventFilterPage;

  export const getData = async(params) => {
    const path = params.slug;
    const year = path[0];
    const month = path[1];
    const response = await fetch(`https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/enents.json`,{cache:'no-cache'});
    const data = await response.json();
    const transData = [];
    for (const key in data){
      console.log(`year : ${year}`);
    
      if(data[key].date.slice(0,4)==year&&data[key].date.slice(5,7)==month){
        
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