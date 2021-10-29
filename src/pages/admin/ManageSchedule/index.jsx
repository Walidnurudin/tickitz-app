import React, { useState } from "react";
import "./index.css";
import { noImage, cineone21, hiflix, ebvid } from "../../../assets/img";
import { Navbar, Footer, ScheduleCard, Input } from "../../../components";
import Pagination from "react-paginate";

function ManageSchedule() {
  const [dataSchedule, setDataSchedule] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [dataPremiere, setDataPremiere] = useState([
    { id: 1, name: "cineone21", image: cineone21 },
    { id: 2, name: "hiflix", image: hiflix },
    { id: 3, name: "ebv.id", image: ebvid }
  ]);
  const [dataTime, setDataTime] = useState(["20:00", "20:00", "20:00", "20:00", "20:00"]);

  const [premiere, setPremiere] = useState("");

  const handleDataPayment = (name) => {
    setPremiere(name);
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light schedule--wrap">
        <div className="container">
          <h1 className="mulish-700 form__schedule--title">Form movie</h1>

          <div className="row form__schedule">
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
              <div className="manage__schedule--img">
                <img src={noImage} alt="spiderman" width="177px" />
              </div>
            </div>

            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="Movie" className="mulish-400 text-secondary">
                    Movie
                  </label>
                  <select
                    className="form-select mulish-400 text-secondary dropdown__manage__schedule"
                    aria-label="Default select example"
                    defaultValue=""
                    // onChange={this.getDataSchedule}
                  >
                    <option value="">Select Movie</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="Location" className="mulish-400 text-secondary">
                    Location
                  </label>
                  <select
                    className="form-select mulish-400 text-secondary dropdown__manage__schedule"
                    aria-label="Default select example"
                    defaultValue=""
                    // onChange={this.getDataSchedule}
                  >
                    <option value="">Select Movie</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>
                </div>
                <div className="col-6">
                  <Input label="Price" name="Price" placeholder="Input Price" type="number" />
                </div>

                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <Input label="Date Start" name="DateStart" type="date" />
                    </div>
                    <div className="col-6">
                      <Input label="Date End" name="DateEnd" type="date" />
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="Premiere" className="mulish-400 text-secondary">
                    Premiere
                  </label>
                  <div className="schedule__payment__method--wrap">
                    {dataPremiere.map((item) => (
                      <div
                        className={
                          item.name === premiere
                            ? "schedule__payment__method--card--item schedule__isActive__payment"
                            : "schedule__payment__method--card--item"
                        }
                        style={{ cursor: "pointer" }}
                        key={item.id}
                        onClick={() => handleDataPayment(item.name)}
                      >
                        <img src={item.image} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="Time" className="mulish-400 text-secondary">
                    Time
                  </label>

                  <div className="d-flex flex-wrap">
                    <button
                      className="mulish-600 text-primary btn btn-outline-primary"
                      onClick={() => alert("hai")}
                      style={{
                        margin: "8px 12px",
                        fontSize: "13px"
                      }}
                    >
                      +
                    </button>
                    {dataTime.map((item, index) => (
                      <button
                        key={index}
                        className="mulish-600 text-secondary btn btn-outline-primary"
                        style={{ margin: "8px 12px", fontSize: "13px" }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <div>asu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="data__schedule--wrap">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h1 className="mulish-700 data__schedule--title">Data movie</h1>

              <div className="d-flex align-self-center">
                <select
                  className="input__sort--data--schedule text-secondary mulish-400"
                  defaultValue=""
                >
                  <option value="">Sort</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>
                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                >
                  <option value="">Location</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>

                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                >
                  <option value="">Movie</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>
              </div>
            </div>
            <div className="row data__schedule">
              {dataSchedule.map((item) => (
                <div className="col-12 col-md-4 mb-4 d-flex justify-content-center" key={item}>
                  <ScheduleCard
                    premiere="cineone21"
                    location="Indramayu"
                    time={[1, 2, 3, 4, 5]}
                    itemId="1"
                    scheduleId="5"
                    timeSchedule="10:00"
                    price="1000"
                    isAdmin={true}
                  />
                </div>
              ))}
            </div>

            <div className="pagination__data__schedule">
              <Pagination
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                // pageCount={ticketInfo.totalPage}
                // onPageChange={this.handlePagination}
                containerClassName={"pagination"}
                disabledClassName={"pagination__disabled"}
                activeClassName={"pagination__active"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ManageSchedule;
