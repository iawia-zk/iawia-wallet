import Box from 'components/core/Box';
import Text from 'components/core/Text';

import AvatarImage from './AvatarImage';

import { TAvatarBaseProps } from '../Avatar.types';
import { getAvatarSize } from '../Avatar.helpers';

function AvatarBase({
  label,
  labelColor = 'textInverted',
  icon: Icon,
  iconColor,
  iconStrokeWidth,
  iconVectorEffect,
  imageUrl,
  backgroundColor = 'backgroundTertiary',
  size = 'medium',
  cover,
  children,
  imageResizeMode,
  labelVariant = 'textBodySubBold',
}: TAvatarBaseProps) {
  const {
    size: avatarSize,
    borderRadius: avatarBorderRadius,
    iconSize: avatarIconSize,
    imageSize: avatarImageSize,
  } = getAvatarSize({ size });

  function renderContent() {
    if (imageUrl) {
      return (
        <AvatarImage
          uri={imageUrl}
          resizeMode={imageResizeMode}
          size={avatarImageSize - 8}
          borderRadius={avatarBorderRadius}
        />
      );
    }

    if (Icon) {
      return (
        <Icon
          width={cover ? avatarImageSize : avatarIconSize}
          height={cover ? avatarImageSize : avatarIconSize}
          iconColor={iconColor}
          strokeWidth={iconStrokeWidth}
          vectorEffect={iconVectorEffect}
        />
      );
    }

    return (
      <Text variant={labelVariant} color={labelColor} numberOfLines={1}>
        {label}
      </Text>
    );
  }

  return (
    <Box
      height={avatarSize}
      width={avatarSize}
      borderRadius={avatarBorderRadius}
      backgroundColor={backgroundColor}
      className="avatar-base-container"
      alignItems="center"
      justifyContent="center"
      position="relative">
      {renderContent()}
      {children}
    </Box>
  );
}

export default AvatarBase;
