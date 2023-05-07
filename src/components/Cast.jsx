import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from './CastItem';
import PropTypes from 'prop-types';
import { fetchCastByMovieId } from '../moviesFinderApi';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();
  const ImgBaseURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await fetchCastByMovieId(movieId);
        setCast(data.cast);
      } catch {}
    };
    fetchCast();
  }, [movieId]);

  const imgDefault = `https://cdn.pixabay.com/photo/2019/01/26/20/22/public-speaking-3956908_960_720.jpg`;
  return (
    !!cast && (
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <CastItem
            key={id}
            name={name}
            character={character}
            imageUrl={
              profile_path ? `${ImgBaseURL}/${profile_path}` : imgDefault
            }
          />
        ))}
      </ul>
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
