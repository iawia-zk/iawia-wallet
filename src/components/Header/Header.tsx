import Text from 'components/core/Text';
import { useTranslation } from 'react-i18next';

import Box from 'components/core/Box';
import IMAGES from 'constants/images';
import { THeaderProps } from './Header.types';
import { HeaderContainer, Logo } from './Header.styles';
import HeaderBackButton from './views/HeaderBackButton';

export const Header = ({ titleId = 'header.defaultTitle', back }: THeaderProps) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer justifyContent="center">
      {back && (
        <Box width="3rem">
          <HeaderBackButton />
        </Box>
      )}
      <Box flex={1} justifyContent="center" alignItems="center" flexDirection="row" gap="s">
        <Logo src={IMAGES.logo} alt="iawia logo" />
        <Text variant="titleSection" color="textPrimary">
          {t(titleId)}
        </Text>
      </Box>
      {back && <Box width="3rem" />}
    </HeaderContainer>
  );
};
