import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { zIndex, ZIndexProps } from 'styled-system';

import { getColor, getSpacing } from 'helpers/theme';

import { Layout } from './Modal.types';

export const ModalContainer = styled(motion.div)<
  ZIndexProps & { isFullPage?: boolean; layout?: Layout }
>`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  position: fixed;
  overflow: hidden auto;
  background-color: ${getColor('backgroundModal')};
  inset: 0;
  opacity: 0;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 ${getSpacing('l')};
  ${zIndex}
  ${({ layout }) =>
    layout === 'modal' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  ${({ isFullPage }) =>
    isFullPage &&
    css`
      overflow: auto;
      opacity: 1;
      padding: 0;

      > div {
        width: 100%;
      }
    `}
`;
