import "./App.css";
import Myfooter from "./components/Myfooter";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Myhomepage";
import CityDetails from "./components/MyCityDetails";
import dotenv from "dotenv";
dotenv.config();
function App() {
  return (
    <BrowserRouter>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dettagli/:lat/:lon" element={<CityDetails />} />
      </Routes>
      <Myfooter />
    </BrowserRouter>
  );
}

export default App;
