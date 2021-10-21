import React, { Component } from "react";
import "./index.css";
import Footer from "../../../components/Footer";
import { cineone21 } from "../../../assets/img";

class Order extends Component {
  render() {
    return (
      <>
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="d-none d-md-block movie__selected">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Movie Selected
                  </h1>
                  <div className="movie__selected--card">
                    <div className="d-flex justify-content-between">
                      <span className="mulish-700" style={{ fontSize: "24px" }}>
                        Spider-Man: Homecoming
                      </span>
                      <div
                        style={{
                          padding: "10px 20px",
                          borderRadius: "8px",
                          backgroundColor: "#eff0f6"
                        }}
                      >
                        <span className="mulish-700 text-primary" style={{ fontSize: "14px" }}>
                          Change movie
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="choose__seat">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Choose Your Seat
                  </h1>
                  <div className="choose__seat--card">skip</div>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="order__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Order Info
                  </h1>
                  <div className="order__info--card">
                    <div className="text-center">
                      <img src={cineone21} alt="logo cineone21" width="132px" />
                      <span
                        className="d-block mulish-600"
                        style={{ fontSize: "24px", marginTop: "13px" }}
                      >
                        CineOne21 Cinema
                      </span>
                    </div>
                    <div style={{ marginTop: "32px" }}>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          Movie selected
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          Spider-Man: Homecoming
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          Tuesday, 07 July 2020
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          02:00pm
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          One ticket price
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          $10
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "40px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          Seat choosed
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          C4, C5, C6
                        </span>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between" style={{ marginTop: "24px" }}>
                      <span
                        className="mulish-600"
                        style={{ fontSize: "16px", letterSpacing: "0.75px" }}
                      >
                        Total Payment
                      </span>
                      <span className="text-primary mulish-700" style={{ fontSize: "24px" }}>
                        $30
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
                choose__btn
              "
                >
                  Change your movie
                </button>
                <button className="btn btn-primary mulish-700 choose__btn">Checkout now</button>
              </div>

              <div className="col-0 col-md-5"></div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Order;
