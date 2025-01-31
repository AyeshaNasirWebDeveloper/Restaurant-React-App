import React from "react"

const Service = ()=>{
    return(
        <div className="container px-4 py-5">
          
  <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
    <div className="col d-flex flex-column align-items-start gap-2">
    <h6 className="text-danger">OUR STORY & SERVICES</h6>
      <h2 className="fw-bold text-body-emphasis h1 fs-1">
      Our Culinary Journey 
      <br></br>And Services
      </h2>
      <p className="text-body-secondary fs-5">
        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
      </p>
      <a href="#" className="btn but btn-success btn-lg px-3">
        Explore
      </a>
    </div>
    <div className="col">
      <div className="row row-cols-1 row-cols-sm-2 g-4 text-center text-color">
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
            <img className="mb-3 img-fluid" src="Images\catering.png" />
          </div>
          <h5 className="fw-semibold mb-0 text-body-emphasis arrow">
            CATERING
          </h5>
          <p className="text-body-secondary arrow">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
          <img className="mb-3 img-fluid" src="Images\delivery.png" />
          </div>
          <h5 className="fw-semibold mb-0 text-body-emphasis arrow">
            FAST DELIVERY
          </h5>
          <p className="text-body-secondary arrow">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
          <img className="mb-3 img-fluid" src="Images\ordering.png" />
          </div>
          <h5 className="fw-semibold mb-0 text-body-emphasis arrow">
            ONLINE ORDERING
          </h5>
          <p className="text-body-secondary arrow">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
          <img className="mb-3 img-fluid" src="Images\gift.png" />
          </div>
          <h5 className="fw-semibold mb-0 text-body-emphasis arrow">
            GIFT CARDS
          </h5>
          <p className="text-body-secondary arrow">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Service