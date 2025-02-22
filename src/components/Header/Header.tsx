import Text from 'components/core/Text';
import { HeaderContainer } from './Header.styles';
import IconButton from 'components/core/IconButton';
import { ArrowLeftIcon } from 'components/core/Icon';
import { THeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';
import Box from 'components/core/Box';

export const Header = ({ title = 'iawia', back }: THeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer flexDirection={'row'} justifyContent={'center'}>
      {/* <Logo src="/logo.svg" alt="iawia logo" /> */}
      <Box width={'3rem'}>
        {back && <IconButton icon={ArrowLeftIcon} onPress={handleBack} variant="secondary" />}
      </Box>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text variant="titleSection" color="textPrimary">
          {title}
        </Text>
      </Box>
      <Box width={'3rem'}></Box>
    </HeaderContainer>
  );
};
