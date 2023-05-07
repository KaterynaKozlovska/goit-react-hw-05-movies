import { useEffect } from 'react';
import React from 'react';

import { useState } from 'react';
import { MoviesFinderApi } from '../moviesFinderApi';
import { MoviesList } from 'components/MoviesList';

// `https://api.themoviedb.org/3/movie/550?api_key=23ef7ebe7a5765558b3c745e54a99f35`;

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pathParams = 'trending/movie/day';
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await MoviesFinderApi(pathParams);
        setTrends(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (!trends) {
    return null;
  }

  return (
    <main>
      <div>
        {isLoading} <MoviesList movies={trends} />
      </div>
    </main>
  );
};
