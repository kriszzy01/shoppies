import { PayloadAction } from "@reduxjs/toolkit";
import { Movie, Search } from "../../../types";
import { fakeMovie, fakeTotalResults } from "../../../tests/fakeData";

import * as searchSlice from "../../../slices/SearchSlice";

const mockPayload = fakeMovie() as Movie;
const mockTotalResults = fakeTotalResults;

describe("Search Reducers", () => {
  let reducer = searchSlice.default;
  let initialState = searchSlice.initialState;
  let searchedInput = "test";

  const mockUpdatedState: Search = {
    id: [mockPayload.imdbID],
    searchedInput,
    movies: { [mockPayload.imdbID]: mockPayload },
    totalResults: mockTotalResults,
    loading: false,
    error: null,
  };

  test("should render initial state", () => {
    const expectedState = initialState;
    const action = {} as PayloadAction;

    const result = reducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  test("should change search input", () => {
    const expectedState = {
      ...initialState,
      searchedInput,
    };

    const payload = searchedInput;

    const result = reducer(initialState, searchSlice.setSearchedInput(payload));

    expect(result).toEqual(expectedState);
  });

  test("should change loading to true, retain search term, and clear previous movies", () => {
    const previousState = mockUpdatedState;

    const expectedState = {
      ...initialState,
      loading: true,
      searchedInput,
      totalResults: previousState.totalResults,
    };

    const result = reducer(previousState, searchSlice.searchMoviesStart());

    expect(result).toEqual(expectedState);
  });

  test("should update state with new data if fetch succeeds", () => {
    const previousState = {
      ...initialState,
      loading: true,
      searchedInput,
    };

    const expectedState = mockUpdatedState;

    let mockResponse = {
      Search: [mockPayload],
      totalResults: mockTotalResults,
    };

    const result = reducer(
      previousState,
      searchSlice.searchMoviesSuccess(mockResponse)
    );

    expect(result).toEqual(expectedState);
  });

  test("should update state with error message if fetch fails", () => {
    const errorPayload = "Network Error";
    const previousState = { ...initialState, loading: true };

    const expectedState = {
      ...initialState,
      error: errorPayload,
      loading: false,
    };

    const result = reducer(
      previousState,
      searchSlice.searchMoviesFailure(errorPayload)
    );

    expect(result).toEqual(expectedState);
  });
});
