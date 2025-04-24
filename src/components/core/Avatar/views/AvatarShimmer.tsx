import Shimmer from 'components/Shimmer';

import { TAvatarShimmerProps } from '../Avatar.types';
import { getAvatarSize } from '../Avatar.helpers';

function AvatarShimmer({ size = 'medium' }: TAvatarShimmerProps) {
  const { size: avatarSize } = getAvatarSize({ size });

  return <Shimmer type="circle" width={avatarSize} height={avatarSize} />;
}

export default AvatarShimmer;
