import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const AddNewContact = () => {
  const { actions } = useContext(Context);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
      agenda_slug: "Marco_Agenda",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    const config = {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://playground.4geeks.com/apis/fake/contact/", config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add contact");
        }
        return res.json();
      })
      .then((response) => {
        console.log("Contact successfully added!", response);

        actions.loadAllContacts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // setTimeout(() => {
    //   navigate("/");
    // }, 1000);
  };

  return (
    <div className="container p-2">
      <div className="row ">
        <h2 className=" text-center m-3 ">Add a new contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit" className="btn btn-primary w-75">
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
