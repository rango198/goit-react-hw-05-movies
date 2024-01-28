import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b271cc149eb4376b4bbb5a0b722032f8';
const params = `api_key=${API_KEY}&language=en-US`;

export const fetchTrending = async () => {
  const res = await axios.get(`trending/movie/day?${params}`);
  return res.data;
};

export const fetchSearchMovies = async query => {
  const res = await axios.get(
    `search/movie?${params}&page=1&include_adult=false&query=${query}`
  );
  return res.data;
};

export const fetchDetailsMovie = async movieId => {
  const res = await axios.get(`movie/${movieId}?${params}`);
  return res.data;
};

export const fetchCast = async movieId => {
  const res = await axios.get(`movie/${movieId}/credits?${params}`);
  return res.data;
};

export const fetchReviews = async movieId => {
  const res = await axios.get(`movie/${movieId}/reviews?${params}&page=1`);
  return res.data;
};
