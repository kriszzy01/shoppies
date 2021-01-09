import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedResults } from "../selectors";
import { fetchMovies } from "../slices/SearchSlice";

export const Pagination: React.FC = () => {
  const { totalResults, searchedInput, error, loading } = useSelector(
    getSearchedResults
  );

  const [page, setPage] = useState(2);
  const [previousInput, setPreviousInput] = useState(searchedInput);

  useEffect(() => {
    setPage(2);
    setPreviousInput(searchedInput);
  }, [searchedInput]);

  const dispatch = useDispatch();

  const totalPages = Math.floor(Number(totalResults) / 10);

  const hasNextPage = page <= totalPages;
  const hasPrevPage = page > 2;

  const handleNext = () => {
    if (!loading) {
      setPage((page) => page + 1);
      dispatch(fetchMovies(previousInput, page));
    }
  };

  const handlePrev = () => {
    if (!loading) {
      setPage((page) => page - 1);
      dispatch(fetchMovies(previousInput, page - 2));
    }
  };

  return (
    <>
      {searchedInput && !error && (
        <div className="pagination">
          <h3>
            Page {page - 1} of {totalPages < 1 ? 1 : totalPages}
          </h3>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Page"
            disabled={!hasPrevPage}
          >
            Prev
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Page"
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};
