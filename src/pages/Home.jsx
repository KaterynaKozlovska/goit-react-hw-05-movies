import { useEffect } from 'react';
import React from 'react';

import { useState } from 'react';
import { MoviesFinderApi } from '../moviesFinderApi';
import { MoviesList } from 'components/MoviesList';

// `https://api.themoviedb.org/3/movie/550?api_key=23ef7ebe7a5765558b3c745e54a99f35`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pathMovies = 'trending/movie/day';
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await MoviesFinderApi(pathMovies);
        setMovies(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      <div>
        {isLoading} <MoviesList movies={movies} />
      </div>
    </main>
  );
};
