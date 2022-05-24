import { useState } from "react";
// icon & images
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./../../assets/image/logo.svg";
// style
import "./Navbar.css";
function Navbar() {
  const [Clicked, setClicked] = useState(true);
  return (
    <nav className="navbar navbar-dark bg-dark text-light navbar-expand-md px-3 px-sm-5 mb-3">
      <div className="container-fluid d-flex align-items-center">
        <div className="navbar-brand fs-2 fw-bolder d-flex align-items-center">
          <img src={Logo} alt="Logo" className="Navbar_Logo me-2 d-block" />
          CALI
        </div>
        <button
          className="navbar-toggler fs-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setClicked(!Clicked)}
        >
          {Clicked ? <FaBars /> : <AiOutlineClose />}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-md-auto mb-2 mb-md-0">
            <li className="nav-item me-md-3 mt-4 mt-md-0 pt-md-0 py-2 py-md-0">
              Home
            </li>
            <li className="nav-item me-md-3 py-2 py-md-0">Favorite</li>
            <li className="nav-item me-md-3 py-2 py-md-0">Login</li>
            <li className="nav-item py-2 py-md-0">About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
