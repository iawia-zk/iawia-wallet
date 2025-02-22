import { FieldValues, UseFormProps } from 'react-hook-form';
import { ObjectSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';

export type TUseFormProps<TFieldValues extends FieldValues> = {
  schema: ObjectSchema<ObjectShape>;
} & UseFormProps<TFieldValues>;
