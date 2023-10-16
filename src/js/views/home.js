import React from "react";

import "../../styles/home.css";
import { ContactCard } from "../component/contactcard";

export const Home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Contact List</h1>
        <ContactCard />
      </div>
    </div>
  );
};
