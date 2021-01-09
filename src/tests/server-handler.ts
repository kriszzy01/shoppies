import { rest } from "msw";
import { fakeTotalResults, fakeMovies } from "./fakeData";

const requestURL = `https://www.omdbapi.com/?s=test&page=1&apikey=test`;

const fakeResponse = {
  Search: fakeMovies,
  totalResults: fakeTotalResults,
};

export const handler = [
  rest.get(requestURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeResponse));
  }),
];

export { rest };
