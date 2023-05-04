import { Container, Header } from './App.styled';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Film } from '../pages/Film';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<Film />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
