import React from "react";
import App from "../../App";
import { renderWithRedux, screen } from "../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";
import { handler, rest } from "../../tests/server-handler";
import { fakeMovies } from "../../tests/fakeData";

const server = setupServer(...handler);

beforeAll(() => {
  server.listen();
  Object.defineProperty(window, "localStorage", {
    value: {
      setItem: jest.fn(() => null),
      removeItem: jest.fn((cb) => null),
      key: jest.fn((cb) => null),
    },
    writable: true,
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("should render without crashing", () => {
    renderWithRedux(<App />);

    expect(screen.queryByRole("heading")).toHaveTextContent(/shoppies/i);

    expect(
      screen.queryByPlaceholderText(/enter movie title/i)
    ).toBeInTheDocument();

    expect(screen.queryAllByRole("status")).toHaveLength(2);

    expect(
      screen.queryByRole("region", { name: /search results/i })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("complementary", { name: /nominations/i })
    ).toBeInTheDocument();
  });

  test("should search and render movies", async () => {
    renderWithRedux(<App />);

    userEvent.type(screen.queryByPlaceholderText(/enter movie title/i), "text");

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findAllByRole("listitem")).toHaveLength(
      fakeMovies.length
    ); //Fake response has 3 movies
  });

  test("should return error message on fetch failure", async () => {
    renderWithRedux(<App />);

    userEvent.type(screen.queryByPlaceholderText(/enter movie title/i), "test");

    server.use(
      rest.get(
        `https://www.omdbapi.com/?s=test&page=1&apikey=test`,
        (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "Error" }));
        }
      )
    );

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    expect(
      await screen.findByText(/are you sure this movie exists/i)
    ).toBeInTheDocument();
  });

  test("should add nomination", async () => {
    renderWithRedux(<App />);

    userEvent.type(screen.queryByPlaceholderText(/enter movie title/i), "text");

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findAllByRole("listitem")).toHaveLength(
      fakeMovies.length
    );

    let nominateButtons = screen.getAllByRole("button", { name: /nominate/i });

    userEvent.click(nominateButtons[0]);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1); //makes one call to the setItem local storage function
  });
});
