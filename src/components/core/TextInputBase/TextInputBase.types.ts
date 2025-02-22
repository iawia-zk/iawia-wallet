import { InputHTMLAttributes, JSX, ReactNode } from 'react';

export type TTextInputBaseProps<TElementType extends TTextInputBaseType> = {
  label: string;
  placeholder: string;
  hasError?: boolean;
  editable?: boolean;
  height: number;
  variant: keyof JSX.IntrinsicElements;
  rightComponent?: ReactNode;
} & Omit<InputHTMLAttributes<TElementType>, 'placeholder' | 'disabled'>;

export type TTextInputBaseType = HTMLInputElement | HTMLTextAreaElement;

export type TBaseInputProps = {
  isPlaceholderVisible: boolean;
  editable: boolean;
  hasError: boolean;
  height: number;
  as: keyof JSX.IntrinsicElements;
};

export type TInputContainerProps = {
  hasError: boolean;
  editable: boolean;
  height: number;
};

export type TGetBackgroundColorParams = {
  hasError: TInputContainerProps['hasError'];
  isFocused: boolean;
  editable: TInputContainerProps['editable'];
};
export type TGetBorderColorParams = {
  hasError: TInputContainerProps['hasError'];
  isFocused: boolean;
  editable: TInputContainerProps['editable'];
};

export type TGetLabelColorParams = {
  hasError: TInputContainerProps['hasError'];
  isFocused: boolean;
  editable: TInputContainerProps['editable'];
};

export type TGetInputColorParams = {
  editable: TInputContainerProps['editable'];
};

export type TGetCaretColorParams = {
  hasError: TInputContainerProps['hasError'];
};
