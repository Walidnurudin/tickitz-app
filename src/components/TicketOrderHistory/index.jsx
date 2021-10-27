import React from "react";
import "./index.css";
import { cineone21 } from "../../assets/img";

function TicketOrderHistory() {
  return (
    <div>
      <div className="ticket__oreder__history">
        <div className="d-flex justify-content-between">
          <div>
            <p>Tuesday, 07 July 2020 - 04:30pm</p>
            <h1>Spider-Man: Homecoming</h1>
          </div>
          <div>
            <img src={cineone21} alt="logo" />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn btn-success">Ticket in active</button>
          </div>
          <div>
            <p>Show Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketOrderHistory;
