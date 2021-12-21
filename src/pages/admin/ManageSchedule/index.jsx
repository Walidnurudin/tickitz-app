import React, { useState, useEffect } from "react";
import "./index.css";
import { noImage, cineone21, hiflix, ebvid } from "../../../assets/img";
import { Navbar, Footer, ScheduleCard, Input } from "../../../components";
import Pagination from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getSchedule,
  postSchedule,
  updateSchedule,
  deleteSchedule
} from "../../../stores/actions/schedule";
import axios from "../../../utils/axios";
import { getMovie } from "../../../stores/actions/movie";
import { Modal } from "react-bootstrap";

function ManageSchedule() {
  // REDUX
  const scheduleState = useSelector((state) => state.schedule);
  const movieState = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const history = useHistory();

  // PARAMS
  const [queryMovie, setQueryMovie] = useState({
    page: 1,
    limit: 100,
    search: "",
    month: "",
    sort: "name ASC"
  });

  const [scheduleParams, setScheduleParams] = useState({
    page: 1,
    limit: 3,
    location: "",
    movieId: "",
    sort: "price ASC"
  });

  // SCHEDULE
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataPremiere, setDataPremiere] = useState([
    { id: 1, name: "cineone21", image: cineone21 },
    { id: 2, name: "hiflix", image: hiflix },
    { id: 3, name: "ebv.id", image: ebvid }
  ]);

  // ERROR HANDLING
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const [idSchedule, setIdSchedule] = useState("");
  const [form, setForm] = useState({
    movieId: "",
    location: "",
    price: 0,
    dateStart: "",
    dateEnd: "",
    premiere: "",
    time: []
  });

  const [showImage, setShowImage] = useState(null);

  // RESET FORM
  const resetForm = () => {
    setForm({
      movieId: "",
      location: "",
      price: "",
      dateStart: "",
      dateEnd: "",
      premiere: "",
      time: []
    });

    setIsUpdate(false);
  };

  // TIME
  const [showInputTime, setShowInputTime] = useState(false);

  // HANDLE TIME
  const HandleShowInputTime = () => {
    setShowInputTime(true);
  };

  const handleAddTime = (event) => {
    if (event.key === "Enter") {
      setForm({
        ...form,
        time: [...form.time, event.target.value]
      });
      setShowInputTime(false);
    }
  };

  const handleDataPayment = (name) => {
    setForm({
      ...form,
      premiere: name
    });
  };

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    if (event.target.name === "movieId") {
      if (event.target.value === "") {
        setShowImage(null);
      } else {
        axios
          .get(`/movie/${event.target.value}`)
          .then((res) => {
            setShowImage(res.data.data[0].image);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  // POST
  const handleSubmit = () => {
    const newData = {
      ...form,
      time: form.time.join(", ")
    };

    dispatch(postSchedule(newData))
      .then((res) => {
        setIsSuccess(true);
        setMsg("Success create schedule!");
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
        setShowImage(null);
        dispatch(getSchedule(scheduleParams));
      })
      .catch((err) => {
        setIsError(true);
        setMsg("please fill in all data!");
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });

    resetForm();
  };

  // PAGINATION
  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;

    setScheduleParams({
      ...scheduleParams,
      page: selectedPage
    });
  };

  // UPDATE
  const handleSetUpdate = (data) => {
    setIdSchedule(data.id);
    console.log(data);
    setForm({
      movieId: data.movieId,
      location: data.location,
      price: data.price,
      dateStart: data.dateStart,
      dateEnd: data.dateEnd,
      premiere: data.premiere,
      time: data.time
    });

    setIsUpdate(true);
  };

  const handleUpdateSubmit = () => {
    console.log(form);

    // dispatch(updateSchedule()).then((res) => {
    //   dispatch(getSchedule(scheduleParams)).then((res) => {
    //     console.log(res);
    //   });
    // });
  };

  // DELETE SCHEDULE
  const [show, setShow] = useState({
    data: null,
    show: false
  });

  const handleClose = () => setShow({ data: null, show: false });
  const handleShow = (id) => setShow({ data: id, show: true });

  const handleDelete = (data) => {
    console.log(data);
    dispatch(deleteSchedule(data)).then((res) => {
      dispatch(getSchedule(scheduleParams));
      handleClose();
    });
  };

  // FILTER
  const handleFilterMovie = (e) => {
    setScheduleParams({
      ...scheduleParams,
      [e.target.name]: e.target.value
    });

    // dispatch(getSchedule(scheduleParams)).then((res) => {
    //   console.log(res);
    // });
  };

  // lifecycle
  useEffect(() => {
    dispatch(getSchedule(scheduleParams)).then((res) => {
      history.push(
        `/manage-schedule?page=${scheduleParams.page}&limit=${scheduleParams.limit}&searchLocation=${scheduleParams.location}&searchMovieId=${scheduleParams.movieId}&sort=${scheduleParams.sort}`
      );
    });
  }, [scheduleParams]);

  useEffect(() => {
    dispatch(getMovie(queryMovie)).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light schedule--wrap">
        <div className="container">
          <h1 className="mulish-700 form__schedule--title">Form schedule</h1>

          <div className="row form__schedule">
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
              <div className="manage__schedule--img">
                <img
                  src={
                    showImage ? `${process.env.REACT_APP_LOCAL}uploads/movie/${showImage}` : noImage
                  }
                  alt="spiderman"
                  width="177px"
                />
              </div>
            </div>

            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="Movie" className="mulish-400 text-secondary">
                    Movie
                  </label>
                  <select
                    className="form-select mulish-400 text-secondary dropdown__manage__schedule"
                    aria-label="Default select example"
                    value={form.movieId}
                    name="movieId"
                    onChange={changeText}
                  >
                    <option value="">Select Movie</option>
                    {movieState.data.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="Location" className="mulish-400 text-secondary">
                    Location
                  </label>
                  <select
                    className="form-select mulish-400 text-secondary dropdown__manage__schedule"
                    aria-label="Default select example"
                    value={form.location}
                    name="location"
                    onChange={changeText}
                  >
                    <option value="">Select Movie</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="indramayu">Indramayu</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  {/* <Input
                    label="Price"
                    name="price"
                    placeholder="Input Price"
                    type="number"
                    // value={form.price}
                    onChange={changeText}
                  /> */}
                  <label className="mulish-400 text-secondary">Price</label>
                  <input
                    type="number"
                    placeholder="Input price"
                    name="price"
                    value={form.price}
                    className="form-control mulish-400 form__input"
                    onChange={changeText}
                  />
                </div>

                <div className="col-12 col-md-6 mt-4 mt-md-0">
                  <div className="row">
                    <div className="col-6">
                      {/* <Input
                        label="Date Start"
                        name="dateStart"
                        type="date"
                        // value={form.dateStart}
                        onChange={changeText}
                      /> */}
                      <label className="mulish-400 text-secondary">Date start</label>
                      <input
                        type="date"
                        name="dateStart"
                        className="form-control mulish-400 form__input"
                        value={form.dateStart}
                        onChange={changeText}
                      />
                    </div>
                    <div className="col-6">
                      {/* <Input
                        label="Date End"
                        name="dateEnd"
                        type="date"
                        // value={form.dateEnd}
                        onChange={changeText}
                      /> */}
                      <label className="mulish-400 text-secondary">Date End</label>
                      <input
                        type="date"
                        name="dateEnd"
                        className="form-control mulish-400 form__input"
                        value={form.dateEnd}
                        onChange={changeText}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mt-4 mt-md-0">
                  <label htmlFor="Premiere" className="mulish-400 text-secondary">
                    Premiere
                  </label>
                  <div className="schedule__payment__method--wrap">
                    {dataPremiere.map((item) => (
                      <div
                        className={
                          item.name === form.premiere
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
                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <label htmlFor="Time" className="mulish-400 text-secondary">
                    Time
                  </label>

                  <div className="d-flex flex-wrap">
                    {showInputTime ? (
                      <Input label="Time" name="time" type="text" onKeyPress={handleAddTime} />
                    ) : (
                      <button
                        className="mulish-600 text-primary btn btn-outline-primary"
                        onClick={HandleShowInputTime}
                        style={{
                          margin: "8px 12px",
                          fontSize: "13px"
                        }}
                      >
                        +
                      </button>
                    )}

                    {form.time.map((item, index) => (
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

              {isError ? (
                <div className="alert alert-danger">{msg}</div>
              ) : isSuccess ? (
                <div className="alert alert-success">{msg}</div>
              ) : (
                <div></div>
              )}

              <div className="d-flex justify-content-end mt-4">
                <div>
                  <button
                    className="btn btn-outline-primary px-5 mulish-700 me-3"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                  {isUpdate ? (
                    <button
                      className="btn btn-primary px-5 mulish-700"
                      onClick={handleUpdateSubmit}
                    >
                      Update
                    </button>
                  ) : (
                    <button className="btn btn-primary px-5 mulish-700" onClick={handleSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="data__schedule--wrap">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h1 className="mulish-700 data__schedule--title">Data schedule</h1>

              <div className="d-flex flex-column flex-md-row align-self-center gap-2">
                <select
                  className="input__sort--data--schedule text-secondary mulish-400"
                  defaultValue=""
                  name="sort"
                  onChange={handleFilterMovie}
                >
                  <option value="">Sort</option>
                  <option value="price ASC">price ascending</option>
                  <option value="price DESC">price descending</option>
                </select>
                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                  name="location"
                  onChange={handleFilterMovie}
                >
                  <option value="">Location</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>

                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                  name="movieId"
                  onChange={handleFilterMovie}
                >
                  <option value="">Movie</option>
                  {movieState.data.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {scheduleState.data.length > 0 ? (
              <>
                <div className="row data__schedule">
                  {scheduleState.data.map((item) => (
                    <div
                      className="col-12 col-md-4 mb-4 d-flex justify-content-center"
                      key={item.id}
                    >
                      <ScheduleCard
                        premiere={item.premiere}
                        location={item.location}
                        time={item.time}
                        scheduleId={item.id}
                        price={item.price}
                        isAdmin={true}
                        handleUpdate={() => handleSetUpdate(item)}
                        handleDelete={() => handleShow(item.id)}
                      />
                    </div>
                  ))}
                </div>
                <div className="pagination__data__schedule">
                  <Pagination
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={scheduleState.pageInfo.totalPage}
                    onPageChange={handlePagination}
                    containerClassName={"pagination"}
                    disabledClassName={"pagination__disabled"}
                    activeClassName={"pagination__active"}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="data__movie">
                  <h1 className="mulish-700 text-center text-secondary">Data not found</h1>
                </div>

                <div style={{ height: "100px" }}></div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />

      <Modal show={show.show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="mulish-600">
            Are you sure want to delete this schedule?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button className="btn btn-secondary mulish-600 px-2 py-1 ms-5" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-danger mulish-600 px-2 py-1 ms-5" onClick={handleDelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageSchedule;
