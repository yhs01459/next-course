import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<AllMeetupsPage />}></Route>
         <Route path='/favorites' element={<FavoritesPage />}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
