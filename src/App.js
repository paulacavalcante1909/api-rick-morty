import Character from "./pages/character/Character";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar  from "./components/navbar/Navbar"


function App() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;



