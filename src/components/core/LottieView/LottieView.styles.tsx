import styled from 'styled-components';

import { getColor } from 'helpers/theme';

export const LottieWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    #primary g > path {
      stroke: ${getColor('illustrationPrimary')};
    }

    #secondary g > path {
      stroke: ${getColor('illustrationSecondary')};
    }
  }
`;
