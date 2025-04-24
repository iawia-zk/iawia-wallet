import Shimmer from 'components/Shimmer';

import { RadioShimmerProps } from '../IconBox.types';
import { ICON_BOX_CONTAINER_SIZE } from '../IconBox.constants';

function IconBoxShimmer({ variant = 'circle', size = 'medium' }: RadioShimmerProps) {
  const containerSizeValue = ICON_BOX_CONTAINER_SIZE[size].size;

  return (
    <Shimmer
      type={variant === 'circle' ? 'circle' : 'rect'}
      width={containerSizeValue}
      height={containerSizeValue}
    />
  );
}

export default IconBoxShimmer;
