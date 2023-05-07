import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { MoviesFinderApiById } from '../moviesFinderApi';

import {
  MovieContainer,
  BoxDetails,
  BoxAdditional,
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
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await MoviesFinderApiById(movieId);
        setMovie(data);
      } catch {}
    }
    getData();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    id,
    release_date,
    poster_path,
    title,
    popularity,
    vote_average,
    vote_count,
    genres,
    overview,
  } = movie;

  const imgDefault =
    'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

  return (
    <main>
      <MovieContainer>
        <BoxDetails key={id}>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imgDefault
            }
            alt={title}
            width="240"
            height="360"
            loading="lazy"
          />
          <InfoWrapper>
            <Title>
              {title} {release_date.slice(0, 4)}
            </Title>
            <SubTitle>
              Vote / Votes:
              <Count>
                {vote_average.toFixed(2)} / {vote_count}
              </Count>
            </SubTitle>
            <SubTitle>
              Popularity:
              <Count>{Math.floor(popularity).toLocaleString('ru')}</Count>
            </SubTitle>
            <SubTitle>Overview</SubTitle>
            <Description>{overview}</Description>
            <SubTitle>Genres</SubTitle>
            <Description>
              {genres
                .map(({ name }) => {
                  return name;
                })
                .join(', ')}
            </Description>

            <SubTitle>Additional information</SubTitle>
            <List>
              <ItemLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </ItemLink>
              <ItemLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </ItemLink>
            </List>
          </InfoWrapper>
        </BoxDetails>
        <BoxAdditional>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </BoxAdditional>
      </MovieContainer>
    </main>
  );
};
