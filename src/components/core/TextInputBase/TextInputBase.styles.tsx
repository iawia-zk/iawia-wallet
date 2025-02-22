import styled, { css } from 'styled-components';

import { getColor } from 'helpers/theme';
import spacing from 'theme/spacing';

import {
  TEXT_INPUT_BASE_FOCUSED_LABEL_HEIGHT,
  TEXT_INPUT_BASE_FOCUSED_LABEL_TEXT_SPACING,
  TEXT_INPUT_BASE_INPUT_BORDER_RADIUS,
  TEXT_INPUT_BASE_INPUT_FONT,
  TEXT_INPUT_BASE_PADDING_VERTICAL_SPACING,
} from './TextInputBase.constants';
import {
  getBackgroundColor,
  getBorderColor,
  getCaretColor,
  getInputColor,
} from './TextInputBase.helpers';
import { TBaseInputProps, TInputContainerProps } from './TextInputBase.types';

export const InputContainer = styled.div<TInputContainerProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  border-radius: ${TEXT_INPUT_BASE_INPUT_BORDER_RADIUS};
  display: flex;
  flex-direction: row;
  align-items: center;
  transition:
    border-color 0.2s linear,
    background-color 0.2s linear;
  border: 1px solid ${getColor('transparent')};
  overflow: hidden;

  &:hover {
    transition: background-color 0.2s linear;

    ${({ hasError, editable }) =>
      !hasError &&
      editable &&
      css`
        background-color: ${getColor('backgroundSecondaryHover')};
      `}
  }

  background-color: ${({ hasError, editable }) =>
    getColor(getBackgroundColor({ hasError, editable, isFocused: false }))};
  border-color: ${({ hasError, editable }) =>
    getColor(getBorderColor({ hasError, editable, isFocused: false }))};

  &:focus-within {
    background-color: ${({ hasError, editable }) =>
      getColor(getBackgroundColor({ hasError, editable, isFocused: true }))};
    border-color: ${({ hasError, editable }) =>
      getColor(getBorderColor({ hasError, editable, isFocused: true }))};
  }
`;

export const BaseInput = styled.input<TBaseInputProps>`
  width: 100%;
  border: none;
  outline: none;
  height: ${({ height }) => height}px;
  padding-top: calc(
    ${TEXT_INPUT_BASE_PADDING_VERTICAL_SPACING} + ${TEXT_INPUT_BASE_FOCUSED_LABEL_HEIGHT}px +
      ${TEXT_INPUT_BASE_FOCUSED_LABEL_TEXT_SPACING}
  );
  padding-left: ${spacing.m};
  padding-bottom: ${spacing.sm};
  padding-right: ${spacing.m};

  font-size: ${TEXT_INPUT_BASE_INPUT_FONT.fontSize};
  font-family: ${TEXT_INPUT_BASE_INPUT_FONT.fontFamily};

  cursor: ${({ editable }) => (editable ? 'auto' : 'not-allowed')};
  caret-color: ${({ hasError }) => getColor(getCaretColor({ hasError }))};

  color: ${({ editable }) => getColor(getInputColor({ editable }))};
  font-weight: 600;

  &::placeholder {
    color: ${({ isPlaceholderVisible }) =>
      getColor(isPlaceholderVisible ? 'textPassive' : 'transparent')};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border-radius: ${TEXT_INPUT_BASE_INPUT_BORDER_RADIUS};
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ editable }) => getColor(getInputColor({ editable }))};
  }
`;

export const TextInputLabelContainer = styled.div`
  background-color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-left: ${spacing.m};
  padding-top: ${TEXT_INPUT_BASE_PADDING_VERTICAL_SPACING};
  pointer-events: none;
`;
