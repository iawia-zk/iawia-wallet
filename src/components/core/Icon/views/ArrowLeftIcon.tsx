import { useTheme } from 'styled-components';

import { TIconProps } from '../Icon.types';

function ArrowLeftIcon({
  width = 24,
  height = 24,
  strokeWidth = 2,
  iconColor = 'textPrimary',
}: TIconProps) {
  const { colors } = useTheme();

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke={colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default ArrowLeftIcon;
