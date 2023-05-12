import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchReviewsByMovieId } from '../moviesFinderApi';
import { List, Item, Name, Content } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await fetchReviewsByMovieId(movieId);
        setReviews(data.results);
      } catch {}
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 1 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Name>Author: {author}</Name>
              <Content>{content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <p> We don't have any reviews for this movie</p>
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
