import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddNewContact = () => {

  const [data, setData] = useState({})

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value})
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <div className="container p-2">
      <div className="row ">
        <h2 className=" text-center m-3 ">Add a new contact</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="enter phone number"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="enter address"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center m-3 ">
          <button type="button" className="btn btn-primary w-75">
            Save Contact
          </button>
        </div>

        <Link to={"/"} className="my-4">
          Go back to contacts
        </Link>
        </form>
      </div>
    </div>
  );
};
