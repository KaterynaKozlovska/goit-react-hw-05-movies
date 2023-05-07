import { useState, useEffect } from 'react';
import { MoviesFinderApi } from '../moviesFinderApi';
import { MoviesList } from '../components/MoviesList';
import { MoviesContainer, MoviesSection } from './Movies.styled';
import { SearchForm } from '../components/SearchForm';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const pathParams = `search/movie?query=${searchQuery}`;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await MoviesFinderApi(pathParams);
        setMovies(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [pathParams, searchQuery]);

  const handleFormSubmit = searchQuery => {
    reset();
    updateQueryString(searchQuery);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const reset = () => {
    setSearchParams('');
    setIsLoading(false);
  };

  return (
    <main>
      <MoviesContainer>
        <MoviesSection>
          <SearchForm onSubmit={handleFormSubmit} />

          {isLoading}

          {movies.length > 0 && <MoviesList movies={movies} />}
        </MoviesSection>
      </MoviesContainer>
    </main>
  );
};
