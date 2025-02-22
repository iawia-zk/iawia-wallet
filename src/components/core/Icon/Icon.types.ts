import { TThemePrimitives } from 'theme/theme.types';

export type TIconBaseProps = {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  iconColor?: keyof TThemePrimitives;
  staticIconColor?: string;
  vectorEffect?: string;
};

export type TIconProps = TIconBaseProps;
