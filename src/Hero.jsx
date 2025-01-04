import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./hero.css"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 my-auto">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 ">
         
          <img
            src="/images/b-1.png"
            className="d-block mx-lg-auto img-fluid back-image"
            alt="Bootstrap Themes"
            width={450}
            height={300}
            loading="lazy"
          />
          <span></span>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Dive Into Delights Of Delectable Food
          </h1>
          <p className="lead">
            Where Each Plate Waves a Story of Cullinary Mastery and Passionate Craftmanship
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="px-2 but btn btn-success btn-lg px-4 me-md-2">
              Order Now
            </button>
            <button type="button" className="btn text-dark btn-lg px-4">
              Watch Video 
            </button>
            <button type="button" className="px-2 btn btn-lg px-4 me-md-2">
            <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Hero
