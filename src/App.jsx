//
import { Routes, Route } from "react-router-dom";
// style
import "./App.css";
// components
import Home from "./pages/Home/Home";
import Navbar from "./sections/Navbar/Navbar";
import Coin from "./pages/Coin/Coin";
import Footer from "./sections/Footer/Footer";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:CoinName" element={<Coin />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
