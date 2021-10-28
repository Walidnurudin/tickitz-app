import React from "react";
import "./index.css";
import { Navbar, Footer, FormMovie } from "../../../components";

function Dashboard() {
  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light">dashboard</div>
      <Footer />
    </>
  );
}

export default Dashboard;
