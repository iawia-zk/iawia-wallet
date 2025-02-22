import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, MainContent } from './MainLayout.styles';

const MainLayout: FC = () => {
  return (
    <Container className="extension-container">
      <Navbar className="navbar">
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
        <Link to="/settings">Settings</Link>
      </Navbar>
      <MainContent className="main-content">
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default MainLayout; 