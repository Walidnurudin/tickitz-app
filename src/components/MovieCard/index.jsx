import React, { useState } from "react";
import "./index.css";
import { noImage } from "../../assets/img";

function MovieCard({ image, name, category, isAdmin, handleDetail, handleUpdate, handleDelete }) {
  return (
    <>
      <div className="up__coming--img">
        <img
          src={image ? `${process.env.REACT_APP_LOCAL}uploads/movie/${image}` : noImage}
          alt={name}
          width="160px"
        />
        <div>
          <span className="mulish-700" style={{ margin: "24px 0px 10px 0px", fontSize: "18px" }}>
            {name}
          </span>
          <span className="text-secondary" style={{ fontSize: "12px", marginBottom: "40px" }}>
            {category}
          </span>

          {isAdmin ? (
            <>
              <button className="btn btn-outline-primary mulish-400" onClick={handleUpdate}>
                Update
              </button>

              <button className="btn btn-outline-danger mulish-400 mt-2" onClick={handleDelete}>
                Delete
              </button>
            </>
          ) : (
            <button className="btn btn-outline-primary mulish-400" onClick={handleDetail}>
              Details
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
