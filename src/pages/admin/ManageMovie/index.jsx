import React from "react";
import "./index.css";
import { Navbar, Footer, FormMovie } from "../../../components";

function ManageMovie() {
  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light form__movie--wrap">
        <FormMovie />
      </div>
      <Footer />
    </>
  );
}

export default ManageMovie;
