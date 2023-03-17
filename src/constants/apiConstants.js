export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "f3941ab4947829836961861f086eab6a";
export const LANGUAGE = "en-US";
export const DEFAULT_PAGE = 1;

export const ENDPOINTS = {
  movies: {
    popularMovies: () => "/movie/popular",
    searchedMovies: () => "/search/movie",
  },
};
