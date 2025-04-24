import styled from 'styled-components';

const StyledImage = styled.img<{ size: number; borderRadius: number; imageResizeMode?: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.borderRadius}px;
  object-fit: ${(props) => props.imageResizeMode ?? 'contain'};
`;

export default StyledImage;
