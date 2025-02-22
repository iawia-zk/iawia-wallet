import { FieldValues, UseFormReturn, useForm as useNativeForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TUseFormProps } from './useForm.types';

function useForm<TFieldValues extends FieldValues>({
  schema,
  ...rest
}: TUseFormProps<TFieldValues>): UseFormReturn<TFieldValues> {
  return useNativeForm<TFieldValues>({
    ...(!!schema && {
      resolver: yupResolver(schema) as never,
    }),
    reValidateMode: 'onChange',
    ...rest,
  });
}

export default useForm;
