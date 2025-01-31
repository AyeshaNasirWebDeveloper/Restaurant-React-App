import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand h3 fs-3 fw-bold" href="./Navbar.jsx">
            <span className="text-white px-1 rounded me-1 color">F</span>oodi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-3 text-dark text-bold">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active arrow"
                  aria-current="page"
                  href="./Navbar.jsx"
                >
                  Home
                </a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="./Navbar.jsx">
                  Menu
                  <span className="arrow">&#9662;</span>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="./Navbar.jsx">
                  Services
                  <span className="arrow">&#9662;</span>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="./Navbar.jsx">
                  Offers
                </a>
              </li>
            </ul>

            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
              <FontAwesomeIcon icon={faLock} className="mx-2" />
              <button
                className="color btn btn-success mx-2 but"
                type="submit"
              >
                <FontAwesomeIcon icon={faPhone} className="pe-2" />
                Contact
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
