import { Container } from './App.styled';
import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';

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
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
};
