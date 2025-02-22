import { TThemePrimitives } from 'theme/theme.types';

export type TActivityIndicatorProps = {
  color?: keyof TThemePrimitives;
  width?: string | number;
  height?: string | number;
};
