import React from "react";
import "./index.css";
import { cineone21 } from "../../assets/img";

function TicketOrderHistory() {
  return (
    <div>
      <div className="ticket__oreder__history">
        <div className="d-flex justify-content-between ticket__oreder__history--top">
          <div>
            <span className="mulish-400 text-secondary">Tuesday, 07 July 2020 - 04:30pm</span>
            <h1 className="mulish-600">Spider-Man: Homecoming</h1>
          </div>
          <div>
            <img src={cineone21} alt="logo" width="120px" />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between ticket__oreder__history--bottom">
          <div>
            <button className="btn mulish-700">Ticket in active</button>
          </div>
          <div>
            <span className="mulish-400 text-secondary">Show Details</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketOrderHistory;
