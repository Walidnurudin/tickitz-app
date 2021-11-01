import React, { useState } from "react";
import "./index.css";
import { Navbar, Footer } from "../../../components";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getDashboard, getMovie } from "../../../stores/actions/movie";

function Dashboard() {
  const [queryMovie, setQueryMovie] = useState({
    page: 1,
    limit: 1000,
    search: "",
    month: "",
    sort: "name ASC"
  });

  const [payloadData, setPayloadData] = useState({
    movieId: "",
    location: "",
    premiere: ""
  });

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const changeText = (event) => {
    setPayloadData({
      ...payloadData,
      [event.target.name]: event.target.value
    });
  };

  const handleReset = () => {
    setPayloadData({
      movieId: "",
      location: "",
      premiere: ""
    });

    Dashboard(payloadData);
  };

  const handleFilter = () => {
    Dashboard(payloadData);
  };

  const Dashboard = (dataParams) => {
    dispatch(getDashboard(dataParams)).then((res) => {
      let newData = {
        ...data,
        labels: [],
        datasets: [
          {
            ...data.datasets[0],
            data: []
          }
        ]
      };

      movie.dashboard.map((item) => {
        newData.labels.push(item.month);
        newData.datasets[0].data.push(item.total);
      });

      setData(newData);
    });
  };

  useState(() => {
    dispatch(getMovie(queryMovie));
    Dashboard(payloadData);
  }, [data]);

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
                    name="movieId"
                    onChange={changeText}
                  >
                    <option value="">Select Movie</option>
                    {movie.data.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select mulish-400 dropdown__dashboard"
                    aria-label="Default select example"
                    defaultValue=""
                    name="location"
                    onChange={changeText}
                  >
                    <option value="">Select Premiere</option>
                    <option value="ebv.id">ebv.id</option>
                    <option value="cineone21">cineone21</option>
                    <option value="hiflix">hiflix</option>
                  </select>

                  <select
                    className="form-select mulish-400 dropdown__dashboard"
                    aria-label="Default select example"
                    defaultValue=""
                    name="premiere"
                    onChange={changeText}
                  >
                    <option value="">Select Location</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>

                  <button
                    className="btn btn-primary w-100 py-3 mt-2 mulish-700"
                    onClick={handleFilter}
                  >
                    Filter
                  </button>

                  <button
                    className="btn btn-outline-primary w-100 py-3 mt-3 mulish-700"
                    onClick={handleReset}
                  >
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
