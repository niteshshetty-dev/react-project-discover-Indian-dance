import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Dances from "./Pages/Dances";
import DanceDetail from "./Pages/DanceDetail";
import About from "./Pages/About";
import { useLocation } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dances" element={<Dances key={location.key} />}></Route>
        <Route path="/dances/:id" element={<DanceDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
