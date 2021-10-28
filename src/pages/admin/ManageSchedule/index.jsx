import React from "react";
import "./index.css";
import { Navbar, Footer, FormMovie } from "../../../components";

function ManageSchedule() {
  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light">Manage schedule</div>
      <Footer />
    </>
  );
}

export default ManageSchedule;
