import styled from 'styled-components';

import LottieView from 'components/core/LottieView';

import { TThemePrimitives } from 'theme/theme.types';

export const StyledActivityIndicator = styled(LottieView)<{ color: keyof TThemePrimitives }>`
  path {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
}
`;
