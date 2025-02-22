import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
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
  padding: 1rem;
`;
