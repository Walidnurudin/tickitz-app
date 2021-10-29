import React from "react";
import "./index.css";
import { Navbar, Footer } from "../../../components";
import { Line } from "react-chartjs-2";

function Dashboard() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light">
        <div className="container">
          <div className="row dashboard">
            <div className="col-12 col-md-9">
              <div className="dashboard__graphic">
                <h1>Dashboard</h1>

                <div className="dashboard__graphic--comp">
                  <Line data={data} options={options} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="dashboard__filtered">
                <h1 className="mulish-700">Filtered</h1>

                <div className="dashboard__filtered--comp">
                  <select
                    className="form-select mulish-400 dropdown__dashboard"
                    aria-label="Default select example"
                    defaultValue=""
                    // onChange={this.getDataSchedule}
                  >
                    <option value="">Select Movie</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>

                  <select
                    className="form-select mulish-400 dropdown__dashboard"
                    aria-label="Default select example"
                    defaultValue=""
                    // onChange={this.getDataSchedule}
                  >
                    <option value="">Select Premiere</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>

                  <select
                    className="form-select mulish-400 dropdown__dashboard"
                    aria-label="Default select example"
                    defaultValue=""
                    // onChange={this.getDataSchedule}
                  >
                    <option value="">Select Location</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>

                  <button className="btn btn-primary w-100 py-3 mt-2 mulish-700">Filter</button>

                  <button className="btn btn-outline-primary w-100 py-3 mt-3 mulish-700">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
