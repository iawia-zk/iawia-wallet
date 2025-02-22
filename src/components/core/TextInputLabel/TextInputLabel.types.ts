import { TThemePrimitives } from 'theme/theme.types';

export type TTextInputLabelProps = {
  htmlFor?: string;
  text: string;
  textColor: keyof TThemePrimitives;
  isPositionTop: boolean;
};
