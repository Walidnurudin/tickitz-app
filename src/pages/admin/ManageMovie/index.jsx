import React, { useState } from "react";
import "./index.css";
import { Navbar, Footer, FormMovie, MovieCard } from "../../../components";
import Pagination from "react-paginate";

function ManageMovie() {
  const [dataMovie, setDataMovie] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light movie--wrap">
        <FormMovie />

        <div className="data__movie--wrap">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h1 className="mulish-700 data__movie--title">Data Movie</h1>

              <div className="d-flex align-self-center">
                <select className="input__sort--data--movie mulish-400" defaultValue="">
                  <option value="">Sort</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>
                <input
                  placeholder="Seatch movie name ..."
                  type="text"
                  className="input__movie--data--movie mulish-400"
                />
              </div>
            </div>

            <div className="row data__movie">
              {dataMovie.map((item) => (
                <div className="col-12 col-md-3 mb-4 d-flex justify-content-center" key={item}>
                  <MovieCard
                    name="sipderman"
                    category="Action, Horror"
                    isAdmin={true}
                    handleDelete={() => alert("delete")}
                    handleUpdate={() => alert("update")}
                  />
                </div>
              ))}
            </div>

            <div className="pagination__data__movie">
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

export default ManageMovie;
