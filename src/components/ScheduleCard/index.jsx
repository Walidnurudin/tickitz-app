import React from "react";
import "./index.css";
import { cineone21, hiflix, ebvid } from "../../assets/img";

function ScheduleCard({
  premiere,
  location,
  time,
  itemId,
  scheduleId,
  timeSchedule,
  price,
  handleTimeSchedule,
  handleBooking,
  handleUpdate,
  handleDelete,
  isAdmin
}) {
  return (
    <>
      <div className="ticket__seat">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src={premiere === "cineone21" ? cineone21 : premiere === "hiflix" ? hiflix : ebvid}
              alt="ebv.id"
              width="106px"
              // height="40px"
            />
          </div>
          <div className="col">
            <span className="mulish-600" style={{ fontSize: "24px" }}>
              {premiere}
            </span>
            <p className="mulish-400 text-secondary" style={{ marginTop: "4px" }}>
              {location}
            </p>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-wrap">
          {time.map((itemTime, index) => (
            <button
              onClick={() => handleTimeSchedule(itemTime, itemId)}
              key={index}
              className={
                itemId === scheduleId && itemTime === timeSchedule
                  ? "mulish-600 isActive__time fw-bold btn btn-primary"
                  : "mulish-600 text-secondary btn btn-outline-primary"
              }
              style={{ margin: "8px 12px", fontSize: "13px" }}
            >
              {itemTime}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-between" style={{ marginTop: "24px" }}>
          <span className="mulish-400 text-secondary" style={{ fontSize: "16px" }}>
            Price
          </span>
          <span className="mulish-600" style={{ fontSize: "16px" }}>
            ${price}/seat
          </span>
        </div>

        {isAdmin ? (
          <div className="row">
            <div className="col">
              <button
                onClick={handleUpdate}
                className="btn btn-outline-primary mulish-700 book__now--btn"
                style={{ fontSize: "14px", width: "100%" }}
              >
                Update
              </button>
            </div>

            <div className="col">
              <button
                onClick={handleDelete}
                className="btn btn-outline-danger mulish-700 book__now--btn"
                style={{ fontSize: "14px", width: "100%" }}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="d-grid">
            <button
              onClick={handleBooking}
              className="btn btn-primary mulish-700 book__now--btn"
              style={{ fontSize: "14px" }}
              disabled={itemId !== scheduleId}
            >
              Book now
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ScheduleCard;
