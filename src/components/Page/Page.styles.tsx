import Box from 'components/core/Box';
import styled from 'styled-components';

export const PageContainer = styled(Box)`
  // keeping the same functionality as the className="page" had
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
