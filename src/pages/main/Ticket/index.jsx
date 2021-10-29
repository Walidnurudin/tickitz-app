import React from "react";
import "./index.css";
import { Navbar, Footer } from "../../../components";
import { download, printer } from "../../../assets/img";

function Ticket() {
  return (
    <>
      <Navbar />
      <div className="bg-primary ticket__component">
        <div className="ticket__wrap">
          <h1 className="mulish-700 text-center">Proof of Payment</h1>

          <div className="ticket__item">oke</div>

          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-outline-secondary px-4">
              <img src={download} alt="download" width="20px" />
              <span className="ms-3">Download</span>
            </button>
            <button className="btn btn-outline-secondary px-4">
              <img src={printer} alt="printer" width="20px" />
              <span className="ms-3">Print</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ticket;
