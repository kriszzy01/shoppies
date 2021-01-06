import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNominations } from "../selectors";
import { deleteNomination } from "../slices/nominationsSlice";
import { Movie } from "../types";
import { getStoredNominations } from "../utils";

export const Nominations: React.FC = () => {
  const { movies } = useSelector(getNominations);

  const previousNominations = getStoredNominations(); //Get previously stored nominations

  //Use either previously stored nominations or new ones
  const nominations =
    previousNominations.length !== 0
      ? previousNominations
      : Object.values(movies);

  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(deleteNomination(id));

    window.localStorage.removeItem(id); //Remove nomination to local storage
  };

  return (
    <aside aria-labelledby="nominations">
      {nominations.length !== 0 && (
        <h2 id="nominations" tabIndex={-1}>
          Nominations
        </h2>
      )}

      <div className="empty-state">
        <p>
          <strong>Your nominations appear here.</strong> <br />
          <span>Nominations are saved even after leaving the browser</span>
        </p>
      </div>

      <ul>
        {nominations.map((movie: Movie) => (
          <li key={movie.imdbID}>
            <p className="text">
              {movie.Title} ({movie.Year})
            </p>
            <button
              type="button"
              aria-label={`Delete ${movie.Title}`}
              onClick={() => handleRemove(movie.imdbID)}
            >
              <span aria-hidden="true">Remove</span>
              <span className="vh">Remove {`${movie.Title}`}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
