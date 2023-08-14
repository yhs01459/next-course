
import Link from "next/link";
const EventsPage = () => {
    const events = [
      {e_id:"1", e_name:"첫번째 이벤트"},
      {e_id:"2", e_name:"두번째 이벤트"},
      {e_id:"3", e_name:"세번째 이벤트"},
      {e_id:"4", e_name:"네번째 이벤트"},
    ];
    return(
      <div>
        <h1>WELCOME EVENTS PAGE</h1>
        <ul>
            {events.map((e)=>(
                <li>
                    <Link href={{
                        pathname: `/events/${e.e_id}`,
                        query : {e_id:e.e_id, e_name:e.e_name},
                     } }>{e.e_name} 보기 </Link>

                </li>
            ))}
        </ul>
      </div>
    );
  }
  export default EventsPage;