import React from "react";
import { Link } from "react-router-dom";

export const AddNewContact = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="container p-2">
      <div className="row ">
        <h2 className=" text-center m-3 ">Add a new contact</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput3" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="enter phone number"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput4" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="enter address"
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
      </div>
    </div>
  );
};
