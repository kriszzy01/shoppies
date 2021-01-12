import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY;

export const searchMovies = async (movieTitle: string, page: number) => {
  const requestURL = `https://www.omdbapi.com/?s=${movieTitle}&page=${page}&apikey=${apikey}`;

  try {
    const searchResults = await axios.get(requestURL);

    const { Search, totalResults } = searchResults.data;

    return { Search, totalResults };
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId: string) => {
  const requestURL = `https://www.omdbapi.com/?i=${movieId}&apikey=${apikey}`;

  const searchResults = await axios.get(requestURL);

  const response = searchResults.data;

  return response;
};
