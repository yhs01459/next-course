import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/MainNavigation";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
     
      <Routes>
         <Route path='/' element={<AllMeetupsPage />}></Route>
         <Route path='/favorites' element={<FavoritesPage />}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
      </Routes>
      </Layout>
  );
}

export default App;
