import styled, { css } from 'styled-components';

import Box from 'components/core/Box';

import { getSpacing, media } from 'helpers/theme';

export const StyledBox = styled(Box)<{ sticky?: boolean }>`
  width: 100%;
  margin-top: ${getSpacing('xl')};

  ${media.s} {
    margin-top: ${getSpacing('xxxl')};
  }

  ${(props) =>
    props.sticky &&
    css`
      position: sticky;
      bottom: ${getSpacing('l')};
      margin-top: ${getSpacing('l')} !important;
    `}
`;
