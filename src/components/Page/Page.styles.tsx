import Box from 'components/core/Box';
import { HEADER_HEIGHT } from 'components/Header/Header.constants';
import styled from 'styled-components';

export const PageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  flex-direction: row;

  #wrapper {
    display: flex;
    box-sizing: border-box;
    flex: 1;
    max-width: 600px;
    height: calc(100vh - ${HEADER_HEIGHT});
  }
`;
