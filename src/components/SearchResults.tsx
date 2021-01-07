import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedResults, getNominations } from "../selectors";
import { Movie } from "../types";
import { addNomination } from "../slices/nominationsSlice";
import { getStoredNominations } from "../utils";
import { Pagination } from "./Pagination";

export const SearchResults: React.FC = () => {
  const searchResults = useSelector(getSearchedResults);

  const { movies, loading, searchedInput, error } = searchResults;

  const { id } = useSelector(getNominations);

  const previousNominations = getStoredNominations(); //Get previously stored nominations

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

  return (
    <section aria-label="Search Results">
      <Pagination />
      {searchedInput && (
        <h2>{sectionHeading(loading, error, searchedInput)}</h2>
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
              {movie.Title} ({movie.Year})
            </p>
            <button
              type="button"
              aria-label={`Nominate ${movie.Title}`}
              onClick={() => handleNominate(movie.imdbID)}
              disabled={id.includes(movie.imdbID)}
            >
              <span aria-hidden="true">Nominate</span>
              <span className="vh">Nominate {`${movie.Title}`}</span>
            </button>
          </li>
        ))}
      </ul>

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
