import {Routes, Route} from "react-router-dom";
import {Layout, AboutMePage, MainPage, UserDetailsPage} from "../../pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/UserDetailsPage" element={<UserDetailsPage/>}/>
          <Route path="/AboutMePage" element={<AboutMePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App; 