import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';


const Footer= () =>{
    return(
        <div className="container">
        <footer className=" row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
  <div className="col-lg-3 mb-3">
  <a className="navbar-brand h3 fs-3 fw-bold " href="./Navbar.jsx">
            <span className="fw-bold text-white px-1 rounded me-1 color">F</span>oodi
          </a>
    <p className="mt-3 text-body-secondary">Savour the artistry where evvery dish is a culinary masterpiece</p>
  </div>

  <div className="col-lg-3 mb-3">
    <h5 className="fw-bold">Usefull Links</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          About us
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Events
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Blogs
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          FAQs
        </a>
      </li>
    </ul>
  </div>
  <div className="col-lg-3 mb-3">
    <h5 className="fw-bold">Main Menu</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Home
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Offers
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Menus
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Reservations
        </a>
      </li>
    </ul>
  </div>
  <div className="col-lg-3 mb-3">
    <h5 className="fw-bold">Contact Us</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          example@email.com
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          +64 958 248 966
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#" className="nav-link p-0 text-body-secondary">
          Social Media
        </a>
      </li>
    </ul>
  </div>
  </footer>
<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
  <ul className="list-unstyled d-flex">
    <li className="ms-3">
      <a className="link-body-emphasis active" href="#">
      <FontAwesomeIcon icon={faFacebook} className="mx-2 fs-2" />
      </a>
    </li>
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
      <FontAwesomeIcon icon={faInstagram} className="mx-2 fs-2" />
      </a>
    </li>
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
      <FontAwesomeIcon icon={faTwitter} className="mx-2 fs-2" />
      </a>
    </li>
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
      <FontAwesomeIcon icon={faYoutube} className="mx-2 fs-2" />
      </a>
    </li>
  </ul>
  <p className="text-center mx-auto">© 2023 Dscode, Inc. All rights reserved.</p>
</div>

</div>


    )
}

export default Footer