import ModalTopContent from 'components/ModalTopContent';
import Box from 'components/core/Box';
import Button from 'components/core/Button';

import { TModalLayoutProps } from './ModalLayout.types';

function ModalLayout({
  titleId,
  titleProps,
  descriptionId,
  descriptionProps,
  icon,
  iconColor,
  lottie,
  topContent,
  buttons,
  bottomContent,
}: TModalLayoutProps) {
  return (
    <Box>
      <ModalTopContent
        type="default"
        titleId={titleId}
        titleProps={titleProps}
        descriptionId={descriptionId}
        descriptionProps={descriptionProps}
        icon={icon}
        iconColor={iconColor}
        lottie={lottie}
        content={topContent}
      />
      {buttons && (
        <Box gap="m" mt="xl">
          {buttons.map((buttonProps) => (
            <Button key={buttonProps.labelId} {...buttonProps} />
          ))}
        </Box>
      )}
      {bottomContent && (
        <Box alignItems="center" mt="s">
          {bottomContent}
        </Box>
      )}
    </Box>
  );
}

export default ModalLayout;
