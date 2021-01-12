import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedResults, getNominations } from "../selectors";
import { Movie } from "../types";
import { addNomination } from "../slices/nominationsSlice";
import { fetchMovieDetails } from "../slices/SearchSlice";
import { getStoredNominations } from "../utils";
import { Pagination } from "./Pagination";
import { Modal } from "./Modal";

export const SearchResults: React.FC = () => {
  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    if (showModal) {
      document.querySelector("body")?.setAttribute("data-modal-open", "");
    }

    return () => {
      document.querySelector("body")?.removeAttribute("data-modal-open");
    };
  }, [showModal]);

  const searchResults = useSelector(getSearchedResults);

  const { movies, loading, searchedInput, error } = searchResults;

  const { id } = useSelector(getNominations);

  const { previousNominations, previousIds } = getStoredNominations(); //Get data of previously stored nominations

  const dispatch = useDispatch();

  const liveRegion = useRef<string>(""); //For accessiblity - used to store changes to live region

  const handleNominate = (nomination: string) => {
    const nominatedMovie = movies[nomination];

    if (previousNominations.length < 5) {
      dispatch(addNomination(nominatedMovie));

      window.localStorage.setItem(nomination, JSON.stringify(nominatedMovie)); //Save nomination to local storage

      liveRegion.current = `nominated ${nominatedMovie.Title}`; //Store nominations to be announced
    }
  };

  const handleMovieDetails = (movieId: string) => {
    if (!movies[movieId].Detail) {
      //Only fetch when movie detail doesn't exist
      dispatch(fetchMovieDetails(movieId));
    }

    setShowModal(movieId);
  };

  return (
    <section aria-label="Search Results">
      {searchedInput && (
        <h2 data-loading={loading}>
          {sectionHeading(loading, error, searchedInput)}
        </h2>
      )}

      <div className="empty-state">
        <p>
          Search for a movie to nominate using the search bar. <br />
          <strong>
            Your search results appear here <span aria-hidden="true">↓</span>
          </strong>
        </p>
      </div>

      <ul>
        {Object.values(movies).map((movie: Movie) => (
          <li key={movie.imdbID}>
            <p className="text">
              {movie.Title} ({movie.Year.slice(0, 4)})
              <button
                type="button"
                onClick={() => handleMovieDetails(movie.imdbID)}
                aria-label={`show details of ${movie.Detail}`}
              >
                <svg
                  width="32"
                  height="32"
                  version="1.1"
                  viewBox="0 0 8.4667 8.4667"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd" strokeWidth=".26458" fill="white">
                    <ellipse cx=".82682" cy="4.2522" rx=".87407" ry=".82682" />
                    <ellipse cx="4.2286" cy="4.2522" rx=".87407" ry=".82682" />
                    <ellipse cx="7.6304" cy="4.2522" rx=".87407" ry=".82682" />
                  </g>
                </svg>
              </button>
            </p>

            <button
              type="button"
              aria-label={`Nominate ${movie.Title}`}
              onClick={() => handleNominate(movie.imdbID)}
              disabled={previousIds.length === 5}
              data-nominated={previousIds.includes(movie.imdbID)}
            >
              <span aria-hidden="true">
                {previousIds.includes(movie.imdbID) ? "Nominated" : "Nominate"}
              </span>
              <span className="vh">Nominate {`${movie.Title}`}</span>
            </button>
          </li>
        ))}
      </ul>

      <Modal movieId={showModal} handleModal={setShowModal} />

      <Pagination />

      <div role="status" aria-live="polite" className="vh">
        {liveRegion.current}
      </div>
    </section>
  );
};

const sectionHeading = (
  loading: boolean,
  error: string | null,
  searchedInput: string
) => {
  if (loading) {
    return "Loading...";
  }

  if (error && error !== "Network Error" && searchedInput) {
    return "Are you sure this movie exists?";
  }

  if (error === "Network Error" && searchedInput) {
    return "Something went wrong";
  }

  if (!searchedInput) {
    return null;
  }

  return `Search Results for "${searchedInput}"`;
};
