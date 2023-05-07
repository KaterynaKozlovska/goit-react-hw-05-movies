import { useEffect } from 'react';
import React from 'react';

import { useState } from 'react';
import { fetchTrendingMovies } from '../moviesFinderApi';
import { MoviesList } from 'components/MoviesList';

// `https://api.themoviedb.org/3/movie/550?api_key=23ef7ebe7a5765558b3c745e54a99f35`;

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies(page);
        setTrends(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <main>
      <div>
        {isLoading} <MoviesList movies={trends} />
        {isLoading}
      </div>
    </main>
  );
};
