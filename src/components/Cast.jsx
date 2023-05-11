import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Image, TextWrapper, Name, Content } from './Cast.styled';
import PropTypes from 'prop-types';
import { fetchCastByMovieId } from '../moviesFinderApi';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        setCast(data.cast);
      } catch {}
    };
    fetchCast();
  }, [movieId]);

  const imgDefault = `https://cdn.pixabay.com/photo/2019/01/26/20/22/public-speaking-3956908_960_720.jpg`;

  return (
    !!cast && (
      <>
        <List key={movieId}>
          {
            !cast?.map(({ cast, profile_path }) => (
              <Item key={cast.id}>
                <Image
                  imageUrl={
                    profile_path
                      ? `${ImgBaseURL}/${cast.profile_path}`
                      : imgDefault
                  }
                  alt={cast.name}
                  width="100"
                  height="160"
                />
                <TextWrapper>
                  <Name>{cast.name}</Name>
                  <Content>Character: {cast.character}</Content>
                </TextWrapper>
              </Item>
            ))
          }
        </List>
      </>
    )
  );
};

Cast.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};
