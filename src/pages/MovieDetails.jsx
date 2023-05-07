import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesById } from '../moviesFinderApi';

import {
  MovieContainer,
  Image,
  InfoWrapper,
  Title,
  SubTitle,
  Description,
  Count,
  List,
  ItemLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
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
    <main>
      <MovieContainer>
        <Image
          src={`${ImgBaseURL}/${movie.poster_path}`}
          alt={movie.title}
          width="240"
          height="360"
        />
        <InfoWrapper>
          <Title>{movie.title}</Title>
          <SubTitle>
            Vote / Votes:
            <Count>
              {movie.vote_average} / {movie.vote_count}
            </Count>
          </SubTitle>
          <SubTitle>Overview</SubTitle>
          <Description>{movie.overview}</Description>
          <SubTitle>Genres</SubTitle>
          <Description>
            {movie.genres.map(item => (
              <List key={item.id}>{item.name}</List>
            ))}
          </Description>

          <SubTitle>Additional information</SubTitle>
          <List>
            <ItemLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </ItemLink>
            <ItemLink to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </ItemLink>
          </List>
        </InfoWrapper>
      </MovieContainer>
    </main>
  );
};
