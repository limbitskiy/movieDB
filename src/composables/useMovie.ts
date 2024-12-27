import axios from "axios";

export const useMovie = () => {
  async function getAllMovies() {
    const response = await axios.get("/data/data.json");
    return response.data.items;
  }
  async function getSingleMovie(movieId: number) {
    const response = await axios.get("/data/detail.json");
    return response.data;
  }
  return {
    getAllMovies,
    getSingleMovie,
  };
};
