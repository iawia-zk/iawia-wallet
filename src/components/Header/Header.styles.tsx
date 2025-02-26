import Box from 'components/core/Box';
import styled from 'styled-components';
import { HEADER_HEIGHT } from './Header.constants';

export const HeaderContainer = styled(Box)({
  alignItems: 'center',
  width: '100%',
  height: HEADER_HEIGHT,
  padding: '16px 24px',
  gap: '12px',
  borderBottom: '1px solid',
  borderColor: 'divider',
});

export const Logo = styled('img')({
  height: '32px',
  width: 'auto',
});
