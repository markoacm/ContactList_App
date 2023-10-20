import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-light mb-3 justify-content-end container-fluid
    "
    >
      <div className="ml-auto">
        <Link to="/addcontact">
          <button className="btn btn-success text-end">Add new Contacts</button>
        </Link>
      </div>
    </nav>
  );
};
