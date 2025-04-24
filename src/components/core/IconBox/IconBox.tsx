import { memo } from 'react';

import Box from 'components/core/Box';
import ActivityIndicator from 'components/core/ActivityIndicator';

import { TIconBoxProps } from './IconBox.types';
import { ICON_BOX_CONTAINER_SIZE, ICON_SIZE } from './IconBox.constants';

function IconBox({
  variant = 'circle',
  containerSize = 'medium',
  iconSize = 'small',
  icon: Icon,
  iconColor,
  backgroundColor = 'buttonGhostPrimary',
  loading,
  iconProps,
  containerProps,
  outline = false,
  className,
}: TIconBoxProps) {
  const containerSizeValue = ICON_BOX_CONTAINER_SIZE[containerSize].size;
  const iconSizeValue = ICON_SIZE[iconSize].size;

  return (
    <Box
      className={className}
      width={containerSizeValue}
      height={containerSizeValue}
      borderRadius={variant === 'circle' ? containerSizeValue : 12}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      borderWidth={outline ? 10 : 0}
      {...containerProps}>
      {loading ? (
        <Box width={iconSizeValue} height={iconSizeValue}>
          <ActivityIndicator />
        </Box>
      ) : (
        <Icon width={iconSizeValue} height={iconSizeValue} iconColor={iconColor} {...iconProps} />
      )}
    </Box>
  );
}

export default memo(IconBox);
