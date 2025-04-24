import { TI18nId } from 'types/common';

export type TSegmentedControlProps<T = string> = {
  options: Array<TSegmentedControlOption<T>>;
  defaultValue: T;
  onChange: (value: T) => void;
};

export type TSegmentedControlOption<T> = {
  labelId: TI18nId;
  value: T;
};
