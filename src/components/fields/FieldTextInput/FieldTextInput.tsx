import { Controller, UseControllerReturn } from 'react-hook-form';
import { getOr } from 'lodash/fp';

import Box from 'components/core/Box';
import TextInput from 'components/TextInput';
import FormErrorLabel from 'components/core/FormErrorLabel';

import { TFieldTextInputProps } from './FieldTextInput.types';

function FieldTextInput({
  name,
  label,
  placeholder,
  control,
  errors,
  defaultValue,
  marginBottom = 'm',
  onFormatValue,
  ...rest
}: TFieldTextInputProps) {
  const errorMessage = getOr(undefined, name, errors)?.message;

  function handleRender({ field }: UseControllerReturn) {
    const { ref, onChange, onBlur, value } = field;

    return (
      <TextInput
        ref={ref}
        label={label}
        placeholder={placeholder}
        value={onFormatValue ? onFormatValue(value) : value}
        onChange={onChange}
        onBlur={onBlur}
        hasError={!!errorMessage}
        {...rest}
      />
    );
  }

  return (
    <Box marginBottom={marginBottom}>
      <Controller name={name} control={control} defaultValue={defaultValue} render={handleRender} />
      {errorMessage && <FormErrorLabel text={errorMessage as string} />}
    </Box>
  );
}

export default FieldTextInput;
