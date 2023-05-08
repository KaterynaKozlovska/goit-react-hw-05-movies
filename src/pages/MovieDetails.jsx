import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchMoviesById } from '../moviesFinderApi';

import {
  MovieCard,
  Images,
  Title,
  Span,
  Text,
  TitleText,
  GenresList,
  Item,
  ButtonBack,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/original';

  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch {}
    };
    fetchMovieDetails();
  }, [movieId]);

  const onGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    !!movie && (
      <>
        <ButtonBack type="button" onClick={onGoBack}>
          Go back
        </ButtonBack>
        <MovieCard>
          <Images
            src={`${ImgBaseURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <Title>{movie.title}</Title>
            <Text>
              <Span>Vote/Votes:</Span> {movie.vote_average} / {movie.vote_count}
            </Text>
            <TitleText>Overview</TitleText>
            <Text>{movie.overview}</Text>
            <TitleText>Genres</TitleText>
            <GenresList>
              {movie.genres.map(item => (
                <Item key={item.id}>{item.name}</Item>
              ))}
            </GenresList>
            <TitleText>Additional information</TitleText>
            <ul>
              <Item>
                <Link to="cast" state={{ from: backLinkHref }}>
                  Cast
                </Link>
              </Item>
              <Item>
                <Link to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </Link>
              </Item>
            </ul>
          </div>
        </MovieCard>
      </>
    )
  );
}

MovieDetails.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
