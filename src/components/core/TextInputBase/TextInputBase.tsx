import { FocusEvent, forwardRef, Ref, useState } from 'react';

import TextInputLabel from 'components/core/TextInputLabel';

import { TTextInputBaseProps, TTextInputBaseType } from './TextInputBase.types';
import { BaseInput, InputContainer, TextInputLabelContainer } from './TextInputBase.styles';
import { getLabelColor } from './TextInputBase.helpers';

function TextInputBase<T extends TTextInputBaseType>(
  {
    id,
    label,
    placeholder,
    hasError = false,
    editable = true,
    autoFocus = false,
    onFocus,
    onBlur,
    value,
    className,
    height,
    variant = 'input',
    rightComponent,
    style,
    ...rest
  }: TTextInputBaseProps<T>,
  ref: Ref<TTextInputBaseType>
) {
  const [isFocused, setIsFocused] = useState<boolean>(autoFocus);

  function handleFocus(event: FocusEvent<T>) {
    onFocus?.(event);
    setIsFocused(true);
  }

  function handleBlur(event: FocusEvent<T>) {
    onBlur?.(event);
    setIsFocused(false);
  }

  const isPlaceholderVisible = !value && isFocused;

  return (
    <InputContainer style={style} hasError={hasError} editable={editable} height={height}>
      <TextInputLabelContainer>
        <TextInputLabel
          htmlFor={id}
          text={label}
          textColor={getLabelColor({ isFocused, hasError, editable })}
          isPositionTop={!!value || isFocused}
        />
      </TextInputLabelContainer>
      {/* @ts-ignore */}
      <BaseInput
        ref={ref}
        as={variant}
        id={id}
        isPlaceholderVisible={isPlaceholderVisible}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={value}
        editable={editable}
        disabled={!editable}
        hasError={hasError}
        autoFocus={autoFocus}
        className={className}
        height={height}
        {...rest}
      />
      {rightComponent}
    </InputContainer>
  );
}

export default forwardRef(TextInputBase);
