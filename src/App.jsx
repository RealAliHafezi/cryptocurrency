//
import { Routes, Route } from "react-router-dom";
// style
import "./App.css";
// components
import Home from "./pages/Home/Home";
import Navbar from "./sections/Navbar/Navbar";
import Coin from "./pages/Coin/Coin";
import Footer from "./sections/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:CoinName" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
