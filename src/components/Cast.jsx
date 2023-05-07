import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCastByMovieId } from '../moviesFinderApi';
import { List, Item, Image, TextWrapper, Name, Content } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchCastByMovieId(movieId, 'credits');
        setCast(data.cast);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const imgDefault = `https://cdn.pixabay.com/photo/2019/01/26/20/22/public-speaking-3956908_960_720.jpg`;
  return (
    <>
      {cast.length === 0 && <div>We don't have a cast for this movie</div>}
      {cast.length > 0 && (
        <List key={movieId}>
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
      )}
    </>
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
