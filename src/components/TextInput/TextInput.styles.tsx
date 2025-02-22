import styled, { css } from 'styled-components';

import TextInputBase from 'components/core/TextInputBase';

import spacing from 'theme/spacing';

import { ICON_SIZE } from './TextInput.constants';

export const StyledTextInputBase = styled(TextInputBase).withConfig({
  shouldForwardProp: () => true,
})<{ hasRightIcon: boolean }>`
  input {
    ${({ hasRightIcon }) =>
      hasRightIcon &&
      css`
        padding-right: calc(${spacing.s} + ${ICON_SIZE}px + ${spacing.m});
      `}
  }
`;
