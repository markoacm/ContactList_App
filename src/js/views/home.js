import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const deleteContact = (id) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete contact");
        }
        return res.json();
      })
      .then((response) => {
        console.log("Contact successfully deleted!", response);

        actions.loadAllContacts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Contact List</h1>
        {store.contacts.map((contacts) => {
          return (
            <div className="card mb-3" key={contacts.id}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    className="img-fluid"
                    alt="..."
                    style={{ width: 200, height: "auto" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body text-start">
                    <h5 className="card-title mb-3">{contacts.full_name}</h5>

                    <p className="card-text">
                      <i className="fas fa-map-marker-alt"></i>
                      <span className="ps-2">{contacts.address}</span>
                    </p>

                    <p className="card-text">
                      <i className="fas fa-phone"></i>
                      <span className="ps-2">{contacts.phone}</span>
                    </p>
                    <p className="card-text">
                      <i className="fas fa-envelope"></i>
                      <span className="ps-2">{contacts.email}</span>
                    </p>
                  </div>
                </div>

                <div className="col-md-2 mt-3">
                  <button type="button" className="btn btn-light">
                    <Link to={`/updatecontact/${contacts.id}`}>
                      <i className="fas fa-pen fa-lg me-1 text-secondary"></i>
                    </Link>
                  </button>

                  <button type="button" className="btn btn-light shadow-none ">
                    <i
                      className="fas fa-trash fa-lg ms-1 text-danger"
                      onClick={() => deleteContact(contacts.id)}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
