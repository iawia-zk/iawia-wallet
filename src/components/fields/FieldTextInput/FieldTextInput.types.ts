import { TTextInputProps } from 'components/TextInput/TextInput.types';
import { Control, FieldErrors } from 'react-hook-form';

import { TSpacing } from 'theme/theme.types';

export type TFieldTextInputProps = {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  errors: FieldErrors;
  marginBottom?: keyof TSpacing;
  onFormatValue?: (value: string) => string;
} & Omit<TTextInputProps, 'hasError'>;
