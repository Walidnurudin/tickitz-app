import React, { useEffect, useState } from "react";
import "./index.css";
import { Navbar, Footer, FormMovie, MovieCard } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getMovie,
  postMovie,
  deleteMovie,
  updateMovie,
  errorFalse
} from "../../../stores/actions/movie";
import Pagination from "react-paginate";

function ManageMovie() {
  const [queryMovie, setQueryMovie] = useState({
    page: 1,
    limit: 4,
    search: "",
    month: "",
    sort: "name ASC"
  });

  // DATA FORM
  const [idMovie, setIdMovie] = useState("");
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
  const [showImage, setShowImage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const history = useHistory();
  const movieState = useSelector((state) => state.movie);
  const Dispatch = useDispatch();

  const resetForm = () => {
    setFormMovie({
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

    setShowImage("");
    setIsUpdate(false);
  };

  // LIFECYCLE
  useEffect(() => {
    Dispatch(getMovie(queryMovie)).then((res) => {
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

    if (event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = () => {
    // VALIDASI
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

    Dispatch(postMovie(formData)).then((res) => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    });

    resetForm();
    setTimeout(() => {
      Dispatch(errorFalse());
    }, 3000);
  };

  // DELETE MOVIE
  const handleDelete = (data) => {
    if (window.confirm("Are you sure you want to delete this movie ?")) {
      Dispatch(deleteMovie(data)).then((res) => {
        console.log(res);
        Dispatch(getMovie(queryMovie)).then((res) => {
          console.log(res);
        });
      });
    }
  };

  // UPDATE MOVIE
  const handleUpdate = (data) => {
    setIdMovie(data.id);
    setFormMovie({
      name: data.name,
      category: data.category,
      releaseDate: data.releaseDate.slice(0, 10),
      synopsis: data.synopsis,
      cast: data.cast,
      director: data.director,
      durationHour: data.duration.split(":")[0],
      durationMinute: data.duration.split(":")[1],
      duration: "",
      image: data.image
    });

    setIsUpdate(true);
  };

  const handleSubmitUpdate = () => {
    console.log("handleupdate", formMovie);

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

    Dispatch(updateMovie(idMovie, formData)).then((res) => {
      console.log(res);
      Dispatch(getMovie(queryMovie)).then((res) => {
        console.log(res);
      });
    });

    resetForm();
  };

  // PAGINATION
  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    setQueryMovie({
      ...queryMovie,
      page: selectedPage
    });

    Dispatch(getMovie(queryMovie)).then((res) => {
      history.push(
        `/manage-movie?page=${selectedPage}&limit=${queryMovie.limit}&search=${queryMovie.search}&month=${queryMovie.month}&sort=${queryMovie.sort}`
      );
    });
  };

  // SEARCH
  const handleSearch = (e) => {
    setQueryMovie({
      ...queryMovie,
      search: e.target.value
    });

    Dispatch(getMovie(queryMovie)).then((res) => {
      history.push(
        `/manage-movie?page=${queryMovie.page}&limit=${queryMovie.limit}&search=${e.target.value}&month=${queryMovie.month}&sort=${queryMovie.sort}`
      );
    });
  };

  // SORT
  const handleSort = (e) => {
    setQueryMovie({
      ...queryMovie,
      sort: e.target.value
    });

    Dispatch(getMovie(queryMovie)).then((res) => {
      history.push(
        `/manage-movie?page=${queryMovie.page}&limit=${queryMovie.limit}&search=${queryMovie.search}&month=${queryMovie.month}&sort=${e.target.value}`
      );
    });
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <div className="bg-light movie--wrap">
        <FormMovie
          image={showImage}
          isUpdate={isUpdate}
          isError={movieState.isError}
          isSuccess={isSuccess}
          handleChangeText={changeText}
          handleChangeFile={changeFile}
          handleSubmit={handleSubmit}
          handleReset={() => resetForm()}
          handleUpdate={handleSubmitUpdate}
          // value
          imageValue={formMovie.image}
          nameValue={formMovie.name}
          categoryValue={formMovie.category}
          directorValue={formMovie.director}
          castValue={formMovie.cast}
          releaseDateValue={formMovie.releaseDate}
          durationHourValue={formMovie.durationHour}
          durationMinuteValue={formMovie.durationMinute}
          synopsisValue={formMovie.synopsis}
        />

        <div className="data__movie--wrap">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h1 className="mulish-700 data__movie--title">Data Movie</h1>

              <div className="d-flex align-self-center">
                <select
                  className="input__sort--data--movie text-secondary mulish-400"
                  defaultValue=""
                  onChange={handleSort}
                >
                  <option value="">Sort</option>
                  <option value="name ASC">name ascending</option>
                  <option value="name DESC">name descending</option>
                </select>
                <input
                  placeholder="Search movie name ..."
                  type="text"
                  className="input__movie--data--movie mulish-400"
                  onChange={handleSearch}
                />
              </div>
            </div>

            {movieState.data.length > 0 ? (
              <>
                <div className="row data__movie">
                  {movieState.data.map((item) => (
                    <div
                      className="col-12 col-md-3 mb-4 d-flex justify-content-center"
                      key={item.id}
                    >
                      <MovieCard
                        name={item.name}
                        category={item.category}
                        isAdmin={true}
                        image={item.image}
                        handleDelete={() => handleDelete(item.id)}
                        handleUpdate={() => handleUpdate(item)}
                      />
                    </div>
                  ))}
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
    </>
  );
}

export default ManageMovie;
