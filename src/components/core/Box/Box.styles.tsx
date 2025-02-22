import styled, { css } from 'styled-components';
import { space, color, layout, flexbox, border, position, grid } from 'styled-system';

import { TStyledBoxProps } from './Box.types';
import { getGapResponsiveMappingCss } from './Box.helpers';

export const StyledBox = styled.div<TStyledBoxProps>`
  display: flex;
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${grid}
  ${({ gap }) => gap && getGapResponsiveMappingCss(gap)}
  ${({ pointerEvents }) =>
    pointerEvents &&
    css`
      pointer-events: ${pointerEvents};
    `}
`;
