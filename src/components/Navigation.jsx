import { Outlet } from 'react-router-dom';

import { Link, Header } from '../components/App.styled';

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Outlet />
    </>
  );
}
export default Navigation;
