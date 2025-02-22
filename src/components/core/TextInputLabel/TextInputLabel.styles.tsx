import styled from 'styled-components';

export const InputLabel = styled.label<{ isPositionTop: boolean }>`
  display: block;
  transform-origin: top left;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${({ isPositionTop }) =>
    isPositionTop ? 'translateY(0) scale(1)' : 'translateY(8px) scale(1.25)'};
  pointer-events: none;
`;
