import React, { Component } from "react";
import "./index.css";
import {
  warningIcon,
  google_pay,
  visa,
  gopay,
  paypal,
  dana,
  bca,
  bri,
  ovo
} from "../../../assets/img";
import Footer from "../../../components/Footer";

class Payment extends Component {
  render() {
    return (
      <>
        <div className="bg-light">
          {/* <!-- mobile --> */}
          <div className="d-block d-md-none">
            <div
              className="d-flex justify-content-between"
              style={{ padding: "16px 24px", backgroundColor: "white" }}
            >
              <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                Total payment
              </span>
              <span className="mulish-600" style={{ fontSize: "20px" }}>
                {" "}
                $30,00{" "}
              </span>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                {/* <!-- web --> */}
                <div className="d-none d-md-block payment__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Payment Info
                  </h1>
                  <div className="payment__info--card">
                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Date & time
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        Tuesday, 07 July 2020 at 02:00pm
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Movie title
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        Spider-Man: Homecoming
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Cinema name
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        CineOne21 Cinema
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Number of tickets
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        3 pieces
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Total payment
                      </span>
                      <span className="mulish-600" style={{ fontSize: "20px" }}>
                        $30,00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="payment__method">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Choose a Payment Method
                  </h1>
                  <div className="payment__method--card">
                    <div className="payment__method--wrap">
                      <div className="payment__method--card--item">
                        <img src={google_pay} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={visa} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={gopay} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={paypal} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={dana} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={bca} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={bri} alt="logo google pay" />
                      </div>

                      <div className="payment__method--card--item">
                        <img src={ovo} alt="logo google pay" />
                      </div>
                    </div>
                    <span className="line">
                      <h2>or</h2>
                    </span>

                    <div className="text-center" style={{ marginTop: "24px" }}>
                      <span className="mulish-400 text-secondary">Pay via cash. span </span>
                      <span className="mulish-600 text-primary">See how it work</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="personal__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Personal Info
                  </h1>
                  <div className="payment__info--card">
                    <div style={{ marginBottom: "32px" }}>
                      <label
                        htmlFor="fullname"
                        className="d-block text-secondary mulish-400"
                        style={{ marginBottom: "14px" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="fullname"
                        className="personal__info--input text-secondary mulish-400"
                      />
                    </div>
                    <div style={{ marginBottom: "32px" }}>
                      <label
                        htmlFor="email"
                        className="d-block text-secondary mulish-400"
                        style={{ marginBottom: "14px" }}
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        className="personal__info--input text-secondary mulish-400"
                      />
                    </div>
                    <div style={{ marginBottom: "32px" }}>
                      <label
                        htmlFor="phonenumber"
                        className="d-block text-secondary mulish-400"
                        style={{ marginBottom: "14px" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        placeholder="phone number"
                        className="personal__info--input text-secondary mulish-400"
                      />
                    </div>

                    <div
                      style={{
                        padding: "20px 32px",
                        background: "rgba(244, 183, 64, 0.3)",
                        width: "100%",
                        borderRadius: "4px"
                      }}
                    >
                      <img src={warningIcon} alt="warning" width="26px" />
                      <span
                        className="mulish-400 text-secondary"
                        style={{ fontSize: "16px", marginLeft: "25px" }}
                      >
                        Fill your data correctly.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-7 d-flex justify-content-between">
                <button
                  className="
                d-none d-md-inline-block
                btn btn-outline-primary
                mulish-700
                payment__btn
              "
                >
                  Previus step
                </button>
                <button className="btn btn-primary mulish-700 payment__btn">Pay your order</button>
              </div>

              <div className="col-0 col-md-5"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
