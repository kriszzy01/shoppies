import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedResults } from "../selectors";
import { fetchMovies } from "../slices/SearchSlice";

export const Pagination: React.FC = () => {
  const [page, setPage] = useState(1);

  const { totalResults, id, searchedInput } = useSelector(getSearchedResults);

  const dispatch = useDispatch();

  const handleNext = () => {
    if (page < Number(totalResults)) {
        setPage((page) => page + 1);
  
        dispatch(fetchMovies(searchedInput, page));
      }
  };

  const handlePrev = () => {
    if (page === 0) {
      setPage((page) => page - 1);

      dispatch(fetchMovies(searchedInput, page));
    }
  };

  return (
    <>
      {id.length !== 0 && (
        <div className="pagination">
          <button type="button" onClick={handlePrev}>
            Prev
          </button>

          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </>
  );
};
