import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Testimonial = () => {
  return (
    <div className="container col-xxl-8 px-4 my-auto">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
            <h6 className="text-danger">TESTIMONIALS</h6>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          What Our Customers Say About Us
          </h1>
          <p className="lead">
            "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            
           <h4 className=" fw-bold">Customer Feedback</h4>
           &nbsp;&nbsp;
            <FontAwesomeIcon icon={faStar} className="text-warning fs-3"/>
            <h5 className="fw-bold">4.9</h5>
            <span className="lead">(18.6k Reviews)</span> 
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 ">
         
          <img
            src="images/chef.png"
            className="d-block mx-lg-auto img-fluid back-image"
            alt="Bootstrap Themes"
            width={450}
            height={300}
            loading="lazy"
          />
          <span></span>
        </div>
      </div>
    </div>


  );
}

export default Testimonial
