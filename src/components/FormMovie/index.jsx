import React from "react";
import "./index.css";
import { noImage, editProfile } from "../../assets/img";
import { Input } from "../../components";

function FormMovie({
  image,
  isUpdate,
  isError,
  isSuccess,
  msg,

  // function
  handleChangeText,
  handleSubmit,
  handleReset,
  handleUpdate,
  onClick,

  // props value
  imageValue,
  nameValue,
  categoryValue,
  directorValue,
  castValue,
  releaseDateValue,
  durationHourValue,
  durationMinuteValue,
  synopsisValue
}) {
  return (
    <>
      <div className="container">
        <h1 className="mulish-700 form__movie--tite">Form Movie</h1>

        <div className="row form__movie">
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <div className="manage__movie--img">
              <img
                src={
                  image
                    ? image
                    : imageValue
                    ? `${process.env.REACT_APP_LOCAL}uploads/movie/${imageValue}`
                    : noImage
                }
                alt="spiderman"
                width="177px"
                style={{ cursor: "pointer" }}
                onClick={onClick}
              />

              <div
                style={{ marginTop: "10px", cursor: "pointer", textAlign: "center" }}
                onClick={onClick}
              >
                <img src={editProfile} alt="user" width="11px" />

                <span className="font-secondary ms-2">Edit</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 col-md-6">
                <Input
                  label="Movie Name"
                  name="name"
                  placeholder="Input Movie Name"
                  type="text"
                  value={nameValue}
                  handleChange={handleChangeText}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Category"
                  name="category"
                  placeholder="Input Category"
                  type="text"
                  value={categoryValue}
                  handleChange={handleChangeText}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Director"
                  name="director"
                  placeholder="Input Director"
                  type="text"
                  value={directorValue}
                  handleChange={handleChangeText}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Casts"
                  name="cast"
                  placeholder="Input Casts"
                  type="text"
                  value={castValue}
                  handleChange={handleChangeText}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Release Date"
                  name="releaseDate"
                  placeholder="Input Release Date"
                  type="date"
                  value={releaseDateValue}
                  handleChange={handleChangeText}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-6">
                    <Input
                      label="Duration Hour"
                      name="durationHour"
                      placeholder="Input Duration Hour"
                      type="number"
                      value={durationHourValue}
                      handleChange={handleChangeText}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      label="Duration Minute"
                      name="durationMinute"
                      placeholder="Input Duration Minute"
                      type="number"
                      value={durationMinuteValue}
                      handleChange={handleChangeText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="textarea__component">
              <label htmlFor="Synopsis" className="mulish-400 text-secondary">
                Synopsis
              </label>
              <textarea
                className="form-control textarea__input mulish-400"
                name="synopsis"
                placeholder="Input Synopsis"
                value={synopsisValue}
                onChange={handleChangeText}
              />
            </div>
          </div>

          {isError && (
            <div className="alert alert-danger">
              {msg.includes("Bad request") ? "Please complete your data input!" : msg}
            </div>
          )}
          {isSuccess && <div className="alert alert-success">Success create data movie!</div>}

          <div className="d-flex justify-content-end">
            <div>
              <button
                className="btn btn-outline-primary px-5 mulish-700 me-3"
                onClick={handleReset}
              >
                Reset
              </button>
              {isUpdate ? (
                <button className="btn btn-primary px-5 mulish-700" onClick={handleUpdate}>
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
    </>
  );
}

export default FormMovie;
