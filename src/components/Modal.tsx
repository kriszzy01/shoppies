import React from "react";
import { useSelector } from "react-redux";
import { getSearchedResults } from "../selectors";
import { MovieDetails } from "../types";

interface ModalProps {
  movieId: string;
  handleModal: React.Dispatch<React.SetStateAction<string>>;
}

export const Modal: React.FC<ModalProps> = ({ movieId, handleModal }) => {
  const { movies } = useSelector(getSearchedResults);

  const selectedMovie = movies[movieId]?.Detail;

  return (
    <div data-modal={movieId ? "show" : "hide"} tabIndex={-1}>
      {selectedMovie ? <ModalText {...selectedMovie} /> : <h2>Loading...</h2>}

      <button
        type="button"
        aria-label="close modal"
        onClick={() => handleModal("")}
      >
        close
      </button>
    </div>
  );
};

const ModalText: React.FC<MovieDetails> = ({
  Actors,
  imdbRating,
  Genre,
  Poster,
  Plot,
  Title,
  Year,
  Released,
}) => {
  return (
    <div className="modal-text">
      <div className="modal-header">
        <img src={Poster} alt={Title} />
        <div>
          <h3>
            {Title} ({Year}) <span className="rating">{imdbRating}</span>
          </h3>
          <p>
            <span>Released:</span> {Released}
          </p>
          <p>
            <span>Genre:</span> {Genre}
          </p>

          <p>
            <span>Cast:</span> {Actors}
          </p>
        </div>
      </div>

      <div>
        <h4>Synopsis</h4>
        <p>{Plot}</p>
      </div>
    </div>
  );
};
