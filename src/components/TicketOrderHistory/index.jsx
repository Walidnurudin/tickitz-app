import React from "react";
import "./index.css";
import { cineone21, hiflix, ebvid } from "../../assets/img";

function TicketOrderHistory({ date, time, movieName, premiere, statusUsed, onClick }) {
  return (
    <div>
      <div className="ticket__oreder__history">
        <div className="d-flex justify-content-between ticket__oreder__history--top">
          <div>
            <span className="mulish-400 text-secondary">
              {date.split("T")[0] || "-"} - {time}
            </span>
            <h1 className="mulish-600">{movieName}</h1>
          </div>
          <div>
            <img
              src={premiere === "cineone21" ? cineone21 : premiere === "hiflix" ? hiflix : ebvid}
              alt="logo"
              width="120px"
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between ticket__oreder__history--bottom">
          <div onClick={onClick}>
            {statusUsed === "Active" ? (
              <button className="btn mulish-700">Ticket in active</button>
            ) : statusUsed === "notActive" ? (
              <button className="btn btn-secondary mulish-700">Ticket used</button>
            ) : (
              <button className="btn btn-warning mulish-700">Ticket pending</button>
            )}
          </div>
          <div>
            <span
              className="mulish-400 text-secondary"
              style={{ cursor: "pointer" }}
              onClick={onClick}
            >
              Show Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketOrderHistory;
