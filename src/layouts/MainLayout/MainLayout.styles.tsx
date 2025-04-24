import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  background-color: #1a1a1d;
`;

export const Navbar = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    flex: 1;

    &:hover {
      color: #666;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
`;
