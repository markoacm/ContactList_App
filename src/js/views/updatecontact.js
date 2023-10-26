import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export const EditContact = () => {
  const { id } = useParams();

  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.id]: e.target.value,
      agenda_slug: "Marco_Agenda",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    };
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update contact");
        }
        return res.json();
      })
      .then((response) => {
        console.log("Contact successfully updated!", response);

        actions.loadAllContacts();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container p-2">
      <div className="row ">
        <h2 className=" text-center m-3 ">Edit contact information</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              value={contact.full_name}
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
              value={contact.email}
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={contact.phone}
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
              value={contact.address}
              placeholder="enter address"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center m-3 ">
            <button type="submit" className="btn btn-primary w-75">
              Update Contact
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
