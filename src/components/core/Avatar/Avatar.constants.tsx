import { TAvatarSizeMap } from './Avatar.types';

export const AVATAR_BORDER_WIDTH = 1;
export const AVATAR_BADGE_ALIGNMENT_POSITION = -1;

export const AVATAR_SIZE_MAP: TAvatarSizeMap = {
  currencyBadge: { size: 16, iconSize: 14, imageSize: 16, borderRadius: 8 },
  badge: { size: 16, iconSize: 10, imageSize: 16, borderRadius: 8 },
  small: { size: 32, iconSize: 16, imageSize: 32, borderRadius: 16 },
  medium: { size: 48, iconSize: 24, imageSize: 48, borderRadius: 24 },
  large: { size: 56, iconSize: 24, imageSize: 56, borderRadius: 28 },
};
