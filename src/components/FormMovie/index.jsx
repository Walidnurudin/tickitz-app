import React from "react";
import "./index.css";
import { noImage } from "../../assets/img";
import { Input } from "../../components";

function FormMovie() {
  return (
    <>
      <div className="container">
        <h1 className="mulish-700 form__movie--tite">Form Movie</h1>

        <div className="row form__movie">
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <div className="manage__movie--img">
              <img src={noImage} alt="spiderman" width="177px" />
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-6">
                <Input
                  label="Movie Name"
                  name="Movie Name"
                  placeholder="Input Movie Name"
                  type="text"
                />
              </div>
              <div className="col-6">
                <Input label="Category" name="Category" placeholder="Input Category" type="text" />
              </div>
              <div className="col-6">
                <Input label="Director" name="Director" placeholder="Input Director" type="text" />
              </div>
              <div className="col-6">
                <Input label="Casts" name="Casts" placeholder="Input Casts" type="text" />
              </div>
              <div className="col-6">
                <Input
                  label="Release Date"
                  name="Release Date"
                  placeholder="Input Release Date"
                  type="date"
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <Input
                      label="Duration Hour"
                      name="Duration Hour"
                      placeholder="Input Duration Hour"
                      type="number"
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      label="Duration Minute"
                      name="Duration Minute"
                      placeholder="Input Duration Minute"
                      type="number"
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
                name="Synopsis"
                placeholder="Input Synopsis"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <div>
              <button className="btn btn-outline-primary px-5 mulish-700 me-3">Reset</button>
              <button className="btn btn-primary px-5 mulish-700">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormMovie;