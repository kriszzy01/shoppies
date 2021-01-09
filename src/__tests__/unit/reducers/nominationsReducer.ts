import { PayloadAction } from "@reduxjs/toolkit";
import { fakeMovie } from "../../../tests/fakeData";
import { Movie, Nominations } from "../../../types";

import * as nominationSlice from "../../../slices/nominationsSlice";

const mockPayload = fakeMovie() as Movie;

describe("Nominations Reducer", () => {
  const reducer = nominationSlice.default;
  const initialState = nominationSlice.initialState;

  const mockUpdatedState: Nominations = {
    id: [mockPayload.imdbID],
    movies: { [mockPayload.imdbID]: mockPayload },
  };

  test("should add nomination payload to state", () => {
    const expectedState = mockUpdatedState;

    const result = reducer(
      initialState,
      nominationSlice.addNomination(mockPayload)
    );

    expect(result).toEqual(expectedState);
  });

  test("should remove selected nomination from state", () => {
    const previousState = mockUpdatedState;

    const expectedState = initialState;

    const result = reducer(
      previousState,
      nominationSlice.deleteNomination(mockPayload.imdbID)
    );

    expect(result).toEqual(expectedState);
  });
});
