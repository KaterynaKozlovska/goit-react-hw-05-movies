import { Container, Header, Link } from './App.styled';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
