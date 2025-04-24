import { TBoxProps } from 'components/core/Box/Box.types';

export type TShimmerProps = {
  type?: TShimmerTypeKeys;
  width?: string | number;
  height?: string | number;
} & TBoxProps;

export type TShimmerTypeKeys =
  | 'line'
  | 'rect'
  | 'circle'
  | 'cardCircle'
  | 'card'
  | 'input'
  | 'avatar'
  | 'button';

export type TShimmerStyleProperties = {
  width?: string;
  height?: string;
  borderRadius?: string;
};
