import Text from 'components/core/Text';

import Box from 'components/core/Box';
import { THeaderProps } from './Header.types';
import { HeaderContainer } from './Header.styles';
import HeaderBackButton from './views/HeaderBackButton';

export const Header = ({ title = 'iawia', back }: THeaderProps) => (
  <HeaderContainer flexDirection="row" justifyContent="center">
    {/* <Logo src="/logo.svg" alt="iawia logo" /> */}
    <Box width="3rem">{back && <HeaderBackButton />}</Box>
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text variant="titleSection" color="textPrimary">
        {title}
      </Text>
    </Box>
    <Box width="3rem" />
  </HeaderContainer>
);
