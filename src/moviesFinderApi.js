import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '23ef7ebe7a5765558b3c745e54a99f35';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function MoviesFinderApi(pathMovies) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathMovies}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
    },
  });
  return await axiosInstance.get();
}

async function MoviesFinderApiById(id, path) {
  const pathURL = path ? `/${path}` : '';
  const pathMovies = `movie/${id}${pathURL}`;
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathMovies}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
    },
  });

  return await axiosInstance.get();
}
MoviesFinderApi.propTypes = {
  pathMovies: PropTypes.string.isRequired,
};

MoviesFinderApiById.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export { MoviesFinderApi, MoviesFinderApiById };
