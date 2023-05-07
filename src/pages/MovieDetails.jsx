import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
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
} from './MovieDetails.styled';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/original';

  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch {}
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    !!movie && (
      <>
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
                <Link to="cast" state={{ from: location.state?.from }}>
                  Cast
                </Link>
              </Item>
              <Item>
                <Link to="reviews" state={{ from: location.state?.from }}>
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
