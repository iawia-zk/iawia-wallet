import Box from 'components/core/Box';

import LottieView from 'components/core/LottieView';
import { TModalTopContentViewProps } from '../ModalTopContent.types';
import { getDefaultIconColor } from '../ModalTopContent.helpers';

function ModalTopContentView({
  type = 'default',
  icon: Icon,
  iconColor = getDefaultIconColor(type),
  lottie,
  content,
}: TModalTopContentViewProps) {
  if (content) {
    return (
      <Box width="100%" alignItems="center">
        {content}
      </Box>
    );
  }

  if (lottie) {
    return <LottieView source={lottie} loop={false} width={120} height={120} />;
  }

  if (Icon) {
    return <Icon width={80} height={80} iconColor={iconColor} />;
  }

  return <></>;
}

export default ModalTopContentView;
