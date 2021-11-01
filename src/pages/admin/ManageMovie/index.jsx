import React, { useEffect, useState } from "react";
import "./index.css";
import { Navbar, Footer, FormMovie, MovieCard } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie } from "../../../stores/actions/movie";
import Pagination from "react-paginate";

function ManageMovie() {
  const [queryMovie, setQueryMovie] = useState({
    page: 1,
    limit: 8,
    search: "",
    month: "",
    sort: "name ASC"
  });

  const [formMovie, setFormMovie] = useState({
    name: "",
    category: "",
    releaseDate: "",
    synopsis: "",
    cast: "",
    director: "",
    durationHour: 0,
    durationMinute: 0,
    duration: "",
    image: null
  });

  const movieState = useSelector((state) => state.movie);
  const Dispath = useDispatch();

  useEffect(() => {
    Dispath(getMovie(queryMovie)).then((res) => {
      console.log(res);
    });
  }, [queryMovie]);

  // CREATE MOVIE
  const changeText = (event) => {
    setFormMovie({
      ...formMovie,
      duration: `${formMovie.durationHour}:${formMovie.durationMinute}`,
      [event.target.name]: event.target.value
    });
  };

  const changeFile = (event) => {
    setFormMovie({
      ...formMovie,
      [event.target.name]: event.target.files[0]
    });
  };

  const handleSubmit = () => {
    console.log(formMovie);

    const formData = new FormData();
    for (const data in formMovie) {
      formData.append(data, formMovie[data]);
    }

    // UNTUK MENGECEK DATA DI DALAM FORMDATA
    for (const data of formData.entries()) {
      // [
      //   [property, value],
      //   [],
      // ]
      console.log(data[0] + ", " + data[1]);
    }

    Dispath(postMovie(formData)).then((res) => {
      console.log(res);
    });
  };

  // PAGINATION
  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    setQueryMovie({
      ...queryMovie,
      page: selectedPage
    });

    Dispath(getMovie(queryMovie)).then((res) => {
      console.log(res);
    });
  };

  // SEARCH
  const handleSearch = (e) => {
    setQueryMovie({
      ...queryMovie,
      search: e.target.value
    });

    Dispath(getMovie(queryMovie)).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light movie--wrap">
        <FormMovie
          handleChangeText={changeText}
          handleChangeFile={changeFile}
          handleSubmit={handleSubmit}
        />

        <div className="data__movie--wrap">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h1 className="mulish-700 data__movie--title">Data Movie</h1>

              <div className="d-flex align-self-center">
                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                >
                  <option value="">Sort</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="indramayu">Indramayu</option>
                </select>
                <input
                  placeholder="Seatch movie name ..."
                  type="text"
                  className="input__movie--data--movie mulish-400"
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="row data__movie">
              {movieState.data.length > 0 ? (
                movieState.data.map((item) => (
                  <div className="col-12 col-md-3 mb-4 d-flex justify-content-center" key={item.id}>
                    <MovieCard
                      name={item.name}
                      category={item.category}
                      isAdmin={true}
                      image={item.image}
                      handleDelete={() => alert("delete")}
                      handleUpdate={() => alert("update")}
                    />
                  </div>
                ))
              ) : (
                <h1>Data not found</h1>
              )}
            </div>

            <div className="pagination__data__movie">
              <Pagination
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={movieState.pageInfo.totalPage}
                onPageChange={handlePagination}
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
