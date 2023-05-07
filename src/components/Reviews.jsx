import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchReviewsByMovieId } from '../moviesFinderApi';
import { List, Item, Name, Content } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchReviewsByMovieId(movieId, 'reviews');
        setReviews(data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

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
