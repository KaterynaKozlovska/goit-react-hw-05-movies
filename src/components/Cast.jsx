import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Image, TextWrapper, Name, Content } from './Cast.styled';
import PropTypes from 'prop-types';
import { fetchCastByMovieId } from '../moviesFinderApi';
import imgDefault from '../avatar.jpg';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        setCast(data.cast);
      } catch {}
    };
    fetchCast();
  }, [movieId]);

  return (
    !!cast && (
      <>
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <Image
                src={
                  profile_path ? `${ImgBaseURL}/${profile_path}` : imgDefault
                }
                alt={name}
                width="100"
                height="160"
              />
              <TextWrapper>
                <Name>{name}</Name>
                <Content>Character: {character}</Content>
              </TextWrapper>
            </Item>
          ))}
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
    })
  ),
};
