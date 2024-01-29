import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Wrapper } from './Layout.styled';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Wrapper>
  );
};

export default Layout;
