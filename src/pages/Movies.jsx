import { useState, useEffect } from 'react';
import { fetchMovies } from '../moviesFinderApi';
import { MoviesList } from '../components/MoviesList';
import { MoviesContainer, MoviesSection } from './Movies.styled';
import { SearchForm } from '../components/SearchForm';
import { useLocation, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  let params = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (params !== '' && !query) {
      setQuery(params);
      return;
    }
    const fetchMoviesByQuery = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovies(query, page);
        setMovies(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByQuery();
  }, [page, params, query]);

  const handleFormSubmit = query => {
    navigate({ ...location, search: `query=${query}` });
    setQuery(query);
    setPage(1);
  };

  return (
    <main>
      <MoviesContainer>
        <MoviesSection>
          <SearchForm onSubmit={handleFormSubmit} />
          {movies.length > 0 && <MoviesList movies={movies} />}
          {isLoading}
        </MoviesSection>
      </MoviesContainer>
    </main>
  );
};
