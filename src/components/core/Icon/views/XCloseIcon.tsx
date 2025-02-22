import { useTheme } from 'styled-components';
import { TIconProps } from '../Icon.types';

function XCloseIcon({
  width = 24,
  height = 24,
  strokeWidth = 2,
  iconColor = 'textPrimary',
  vectorEffect = 'default',
}: TIconProps) {
  const { colors } = useTheme();

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        stroke={colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M18 6 6 18M6 6l12 12"
        vectorEffect={vectorEffect}
      />
    </svg>
  );
}

export default XCloseIcon;
