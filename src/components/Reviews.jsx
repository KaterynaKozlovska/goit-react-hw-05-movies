import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesFinderApiById } from '../moviesFinderApi';
import { List, Item, Name, Content } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await MoviesFinderApiById(movieId, 'reviews');
        setReviews(data.results);
      } catch {}
    }
    getData();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <>
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
      {reviews.length > 0 && (
        <List key={movieId}>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Name>Author: {author}</Name>
              <Content>{content}</Content>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

Reviews.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
