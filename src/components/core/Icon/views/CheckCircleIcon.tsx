import { useTheme } from 'styled-components';
import { TIconProps } from '../Icon.types';

function CheckCircleIcon({
  width = 24,
  height = 24,
  strokeWidth = 2,
  iconColor = 'textPrimary',
}: TIconProps) {
  const { colors } = useTheme();

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={colors[iconColor]}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckCircleIcon;
