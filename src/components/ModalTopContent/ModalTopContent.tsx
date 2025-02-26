import Box from 'components/core/Box';
import Text from 'components/core/Text';

import ModalTopContentView from './views/ModalTopContentView';
import { TModalTopContentProps } from './ModalTopContent.types';

function ModalTopContent({
  type,
  titleId,
  titleProps,
  descriptionId,
  descriptionProps,
  icon,
  iconColor,
  lottie,
  content,
}: TModalTopContentProps) {
  const hasTopContent = icon || lottie || content;

  return (
    <Box alignItems={hasTopContent ? 'center' : 'flex-start'}>
      {hasTopContent && (
        <ModalTopContentView
          type={type}
          icon={icon}
          iconColor={iconColor}
          lottie={lottie}
          content={content}
        />
      )}
      {titleId && (
        <Text
          textId={titleId}
          variant="titleSection"
          color="textPrimary"
          mt={hasTopContent ? 'm' : 'none'}
          textAlign={hasTopContent ? 'center' : 'left'}
          {...titleProps}
        />
      )}
      {descriptionId && (
        <Text
          textId={descriptionId}
          variant="textBody"
          color="textSecondary"
          mt="s"
          textAlign={hasTopContent ? 'center' : 'left'}
          {...descriptionProps}
        />
      )}
    </Box>
  );
}

export default ModalTopContent;
