import React, { useState, useEffect } from "react";
import "./index.css";
import { Navbar, Footer } from "../../../components";
import { download, printer, tickitz1 } from "../../../assets/img";
import QRCode from "react-qr-code";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Ticket(props) {
  const history = useHistory();
  const userState = useSelector((state) => state.user);

  const [form, setForm] = useState({
    dateBooking: props.location.state ? props.location.state.dateBooking : "",
    id: props.location.state ? props.location.state.id : "",
    name: props.location.state ? props.location.state.name : "",
    paymentMethod: props.location.state ? props.location.state.paymentMethod : "",
    price: props.location.state ? props.location.state.price : "",
    scheduleId: props.location.state ? props.location.state.scheduleId : "",
    seat: props.location.state ? props.location.state.seat : "",
    statusPayment: props.location.state ? props.location.state.statusPayment : "",
    timeBooking: props.location.state ? props.location.state.timeBooking : "",
    userId: props.location.state ? props.location.state.userId : ""
  });

  const checkingData = () => {
    const {
      dateBooking,
      id,
      name,
      paymentMethod,
      price,
      scheduleId,
      seat,
      statusPayment,
      timeBooking,
      userId
    } = form;
    if (
      !dateBooking ||
      !id ||
      !name ||
      !paymentMethod ||
      !price ||
      !scheduleId ||
      !seat ||
      !statusPayment ||
      !timeBooking ||
      !userId
    ) {
      alert("Select Movie !");
      history.push("/");
    }
  };

  useEffect(() => {
    checkingData();
  }, []);

  return (
    <>
      <Navbar image={userState.data.image} />
      {/* MOBILE */}
      <div className="ticket__component--mobile d-flex d-md-none justify-content-center bg-primary">
        <div className="ticket__item--mobile">
          <div className="ticket__item--mobile--header row">
            <div className="col-12 text-center">
              <QRCode
                value={`${process.env.REACT_APP_LOCAL}booking/used-ticket/${form.id}`}
                size={186}
              />
            </div>
          </div>
          <div className="ticket__item--mobile--content row">
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Movie</span>
              <p className="mulish-600">{form.name}</p>
            </div>
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Category</span>
              <p className="mulish-600">-</p>
            </div>
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Date</span>
              <p className="mulish-600">{form.dateBooking}</p>
            </div>
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Time</span>
              <p className="mulish-600">{form.timeBooking}</p>
            </div>
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Count</span>
              <p className="mulish-600">{form.seat.length} pcs</p>
            </div>
            <div className="col-6 mb-3">
              <span className="mulish-600 text-secondary">Seats</span>
              <p className="mulish-600">{form.seat ? form.seat.join(", ") : ""}</p>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-between ticket__item--mobile--total">
                <span className="mulish-600">Total</span>
                <span className="mulish-600">${form.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary d-none d-md-block ticket__component">
        <div className="ticket__wrap ">
          {/* DESKTOP */}
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
                  <span className="mulish-600">{form.name}</span>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Date</span>
                      <span className="mulish-600">{form.dateBooking}</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Time</span>
                      <span className="mulish-600">{form.timeBooking}</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Category</span>
                      <span className="mulish-600">-</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Count</span>
                      <span className="mulish-600">{form.seat.length} pieces</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Seats</span>
                      <span className="mulish-600">{form.seat ? form.seat.join(", ") : ""}</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column" style={{ marginBottom: "16px" }}>
                      <span className="mulish-400 text-secondary">Price</span>
                      <span className="mulish-700">${form.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center" style={{ padding: "50px 0px" }}>
                <QRCode value="tes qr code" size={186} />
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
