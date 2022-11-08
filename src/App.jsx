import "./App.css";
import NavBarLogin from "./Utility/NavBarLogin";
import Carousel from "./componet/Home/carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConToDig from "./componet/ConToDig";
import Home from "./pages/Home/Home";
import WorkPath from "./componet/workPath";
import ContactUs from "./componet/contactUS";
function App() {
  return (
    <div className="App">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ConToDig />
      <WorkPath />
      <ContactUs />
    </div>
  );
}

export default App;
