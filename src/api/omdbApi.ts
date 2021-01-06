import axios from "axios";

export const searchMovies = async (movieTitle: string, page: number) => {
  const apikey = process.env.REACT_APP_API_KEY;

  const requestURL = `http://www.omdbapi.com/?s=${movieTitle}&page=${page}&apikey=${apikey}`;

  try {
    const searchResults = await axios.get(requestURL);

    const { Search, totalResults } = searchResults.data;

    return { Search, totalResults };
  } catch (error) {
    throw error;
  }
};
