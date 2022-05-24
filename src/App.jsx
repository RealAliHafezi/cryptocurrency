//
import { Routes, Route } from "react-router-dom";
// style
import "./App.css";
// components
import Home from "./pages/Home/Home";
import Navbar from "./sections/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div> 
  );
}

export default App;
