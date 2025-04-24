import AvatarBase from './views/AvatarBase';
import AvatarBadge from './views/AvatarBadge';
import { TAvatarProps } from './Avatar.types';

function Avatar({
  size,
  backgroundColor,
  label,
  labelColor,
  imageUrl,
  icon,
  iconColor,
  badgeProps,
  cover,
  imageResizeMode,
  themeIconColor,
  labelVariant,
}: TAvatarProps) {
  return (
    <AvatarBase
      size={size}
      backgroundColor={backgroundColor}
      label={label}
      imageUrl={imageUrl}
      icon={icon}
      iconColor={iconColor}
      themeIconColor={themeIconColor}
      cover={cover}
      imageResizeMode={imageResizeMode}
      labelVariant={labelVariant}
      labelColor={labelColor}>
      {badgeProps && <AvatarBadge {...badgeProps} />}
    </AvatarBase>
  );
}

export default Avatar;
