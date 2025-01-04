import React from 'react';
import "./categories.css";

const Categories = ()=> {
 return (
   <div className="container my-5">
    <h6 className="text-danger text-center fw-bold">CUSTOMER FAVOURITES</h6>
    <h1 className="text-center fw-bold text-dark">Popular Categories</h1>
    <div className=" row g-4 py-5 row-cols-1 row-cols-lg-4">

  <div className="feature col text-center">
    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3 image">
      <img className="img-fluid" src="Images\c-1.png" />
    </div>
    <h3 className="fs-2 text-body-emphasis">Main Dish</h3>
    <p>
    (86 dishes)
    </p>
    
  </div>
  <div className="feature col text-center">
    <div className="h-10 feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3 image">
      <img className="img-fluid" src="Images\c-2.png" />
    </div>
    <h3 className="fs-2 text-body-emphasis">Break Fast</h3>
    <p>
    (12 break fast)
    </p>
    
  </div>
  <div className="feature col text-center">
    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3 image">
     <img className="img-fluid" src="Images\c-3.png" />
    </div>
    <h3 className="fs-2 text-body-emphasis">Dessert</h3>
    <p>
    (48 dessert)
    </p>
    
  </div>
  <div className="feature col text-center">
    <div className="h-10 feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3 image">
      <img className="img-fluid" src="Images\c-4.png" />
    </div>
    <h3 className="fs-2 text-body-emphasis">Browse All</h3>
    <p>
    (255 Items)
    </p>
    
  </div>
</div>
</div>

);
}

export default Categories;