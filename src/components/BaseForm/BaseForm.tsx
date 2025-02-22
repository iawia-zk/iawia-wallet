import React, { ReactElement } from 'react';

import Box from 'components/core/Box';
import Button from 'components/core/Button';
import BottomInsetBox from 'components/BottomInsetBox';

import { TBaseFormProps } from './BaseForm.types';

function BaseForm({
  children,
  onSubmit,
  submitButtonLabel,
  submitButtonProps,
  isSubmitButtonVisible = true,
  extraButtonContent,
  buttonStickyContent,
  buttonBottomContent,
  paddingTop,
  backgroundColor = 'backgroundPrimary',
}: TBaseFormProps): ReactElement {
  function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (
      !submitButtonProps?.disabled &&
      e.key === 'Enter' &&
      e.target instanceof HTMLElement &&
      e.target.nodeName !== 'TEXTAREA'
    ) {
      e.preventDefault();
      onSubmit?.(e);
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
      <Box flex={1} backgroundColor={backgroundColor} pt={paddingTop}>
        <Box flex={1}>{children}</Box>
        {extraButtonContent}
        {isSubmitButtonVisible && (
          <BottomInsetBox>
            {buttonStickyContent}
            <Button type="submit" {...submitButtonProps} onPress={onSubmit}>
              {submitButtonLabel}
            </Button>
            {buttonBottomContent}
          </BottomInsetBox>
        )}
      </Box>
    </form>
  );
}

export default BaseForm;
