import React from "react";
import "./index.css";
import { Navbar, Footer } from "../../../components";
import { download, printer, tickitz1 } from "../../../assets/img";
import QRCode from "react-qr-code";

function Ticket() {
  return (
    <>
      <Navbar />
      <div className="bg-primary ticket__component">
        <div className="ticket__wrap">
          <h1 className="mulish-700 text-center">Proof of Payment</h1>

          <div className="ticket__item">
            <div className="row bg-primary ticket__item--header">
              <div className="col-9">
                <div className="d-flex justify-content-between" style={{ padding: "23px 56px" }}>
                  <img src={tickitz1} alt="logo tickitz" width="115px" />

                  <p className="mulish-600 text-white my-auto">Admit One</p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={tickitz1} alt="logo tickitz" width="115px" className="my-auto" />
              </div>
            </div>
            <div className="row bg-white ticket__item--content">
              <div className="col-9" style={{ padding: "32px 56px 43px 56px" }}>
                <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                  <span className="mulish-400 text-secondary">Movie</span>
                  <span className="mulish-600">Spider-Man: Homecoming</span>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Date</span>
                      <span className="mulish-600">07 July</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Time</span>
                      <span className="mulish-600">02:00pm</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Category</span>
                      <span className="mulish-600">PG-13</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Count</span>
                      <span className="mulish-600">3 pieces</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Seats</span>
                      <span className="mulish-600">C1, C2, C3</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Price</span>
                      <span className="mulish-700">$30.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center" style={{ padding: "50px 0px" }}>
                <QRCode value="tes qr code" size="186" />
              </div>
            </div>
          </div>

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
