import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/MeetupList";

function FavoritesPage(){
    const favoriesCtx = useContext(FavoritesContext);
    let content;
    if(favoriesCtx.totalFavorites ===0){
        content = <p>즐겨찾기 항목이 비어있습니다.</p>

    } else {
        content = <MeetupList meetups ={favoriesCtx.favorites}></MeetupList>
    }

    return (<section>
        <h1>My Favorites</h1>
        {content}
        </section>);
}
export default FavoritesPage;