import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Navbar, MainContent } from './MainLayout.styles';

const MainLayout: FC = () => (
  <Container className="extension-container">
    <Navbar className="navbar">
      <Link to="/data">Data</Link>
      <Link to="/history">History</Link>
    </Navbar>
    <MainContent className="main-content">
      <Outlet />
    </MainContent>
  </Container>
);

export default MainLayout;
