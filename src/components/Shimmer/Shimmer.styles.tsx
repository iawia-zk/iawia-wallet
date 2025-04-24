import styled, { keyframes } from 'styled-components';

import Box from 'components/core/Box';

import { TShimmerProps } from './Shimmer.types';

const animate = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const StyledShimmer = styled(Box)<TShimmerProps>`
  animation: ${animate} 1.5s infinite ease-out;
  background-size: 400% 100%;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-image: ${({ theme }) =>
    renderLinearGradient(theme.colors.backgroundSecondary, theme.colors.backgroundSecondaryHover)};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '3.5rem'};
  border-radius: ${(props) => props.borderRadius};
`;

function renderLinearGradient(backgroundColor: string, indicatorColor: string) {
  return `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${indicatorColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor}, ${backgroundColor})`;
}
