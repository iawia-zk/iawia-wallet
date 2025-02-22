import { useTheme } from 'styled-components';
import { TIconProps } from '../Icon.types';

function Upload04Icon({
  width = 24,
  height = 24,
  strokeWidth = 2,
  iconColor = 'textPrimary',
}: TIconProps) {
  const { colors } = useTheme();

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        stroke={colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m16 12-4-4m0 0-4 4m4-4v9.2c0 1.39 0 2.086.55 2.865.366.517 1.42 1.155 2.047 1.24.945.128 1.304-.059 2.022-.433A9.999 9.999 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.996 9.996 0 0 0 5 8.662"
      />
    </svg>
  );
}

export default Upload04Icon;
