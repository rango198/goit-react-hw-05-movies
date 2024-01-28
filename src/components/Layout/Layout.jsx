import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default Layout;
