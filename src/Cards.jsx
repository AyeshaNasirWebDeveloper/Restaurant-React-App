import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <div className="container my-5">
      {/* Section Title */}
      <h6 className="text-danger fw-bold text-uppercase">Special Dishes</h6>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="fw-bold text-dark">
            Standout Dishes <br /> From Our Menu
          </h1>
        </div>
        <div className="col-lg-6 text-lg-end text-start mt-3 mt-lg-0">
          <button className="btn but active mx-2">{"<"}</button>
          <button className="btn but">{">"}</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 text-center">
            <img
              className="card-img-top mx-auto p-3 img-fluid "
              src="Images/salad-1.png"
              alt="Fattoush Salad"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h3 className="fs-5 text-body-emphasis">Fattoush Salad</h3>
              <p className="text-muted">A delicious mix of fresh veggies and herbs.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h4">
                  <span className="text-danger">$</span>24.00
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                  4.9
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 text-center">
            <img
              className="card-img-top mx-auto p-3 img-fluid"
              src="Images/salad-2.png"
              alt="Vegetable Salad"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h3 className="fs-5 text-body-emphasis">Vegetable Salad</h3>
              <p className="text-muted">A vibrant mix of greens and toppings.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h4">
                  <span className="text-danger">$</span>26.00
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                  4.6
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 text-center">
            <img
              className="card-img-top mx-auto p-3 img-fluid"
              src="Images/salad-3.png"
              alt="Egg Veggie Salad"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h3 className="fs-5 text-body-emphasis">Egg Veggie Salad</h3>
              <p className="text-muted">Fresh greens paired with egg slices.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h4">
                  <span className="text-danger">$</span>23.00
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                  4.5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
