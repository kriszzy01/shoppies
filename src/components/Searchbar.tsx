import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { fetchMovies, setSearchedInput } from "../slices/SearchSlice";

export const Searchbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const debouncedInput = useCallback(
    debounce((nextValue) => {
      dispatch(fetchMovies(nextValue)); //Make API request after 500ms
      dispatch(setSearchedInput(nextValue));
    }, 500),
    [] //Function will be created only once (initial render)
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchInput(value);
    debouncedInput(value);
  };

  return (
    <div className="searchContainer">
      <label htmlFor="search" className="vh">
        Enter the title of a movie to search
      </label>

      <p aria-hidden>Movie Title</p>

      <div className="searchInput">
        <i aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </i>

        <input
          type="text"
          id="search"
          placeholder="Enter movie title"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
