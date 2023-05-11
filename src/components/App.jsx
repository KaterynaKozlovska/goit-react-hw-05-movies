import { Container } from './App.styled';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';
import Navigation from '../components/Navigation';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" exact element={<Navigation />}>
          <Route index exact element={<Home />} />
          <Route path="movies" exact element={<Movies />} />
          <Route path="movies/:movieId" exact element={<MovieDetails />}>
            <Route path="cast" exact element={<Cast />} />
            <Route path="reviews" exact element={<Reviews />} />
          </Route>
          <Route path="*" exact element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
};
