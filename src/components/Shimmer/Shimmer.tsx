import { ReactElement } from 'react';

import { StyledShimmer } from './Shimmer.styles';
import { TShimmerProps } from './Shimmer.types';
import { SHIMMER_STYLE_MAP } from './Shimmer.constants';

function Shimmer({ type = 'line', ...rest }: TShimmerProps): ReactElement {
  const shimmerStyle = SHIMMER_STYLE_MAP[type];

  return (
    // @ts-ignore
    <StyledShimmer
      type={type}
      width={shimmerStyle.width}
      height={shimmerStyle.height}
      borderRadius={shimmerStyle.borderRadius}
      {...rest}
    />
  );
}

export default Shimmer;
