import React from "react";

export const ContactCard = () => {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            className="img-fluid"
            alt="..."
            style={{ width: 200, height: "auto" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="card-title ">Name</h5>

            <p className="card-text">
              <i className="fas fa-map-marker-alt"></i>
              <span className="ps-3">Address</span>
            </p>

            <p className="card-text">
              <i class="fas fa-phone"></i>
              <span className="ps-3">Phone Number</span>
            </p>
            <p className="card-text">
              <i class="fas fa-envelope"></i>
              <span className="ps-3">Email</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
