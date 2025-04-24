import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Navbar, MainContent } from './MainLayout.styles';

const MainLayout: FC = () => (
  <Container className="extension-container">
    <MainContent className="main-content">
      <Outlet />
    </MainContent>
    <Navbar className="navbar">
      <Link to="/wallet">Wallet</Link>
      <Link to="/data">Data</Link>
      <Link to="/history">History</Link>
    </Navbar>
  </Container>
);

export default MainLayout;
