import React, { useState } from "react";

export const Searchbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <label>Movie Title</label>

      <div>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchInput}
          onChange={handleChange}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </div>
    </div>
  );
};
