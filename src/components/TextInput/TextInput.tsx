import { forwardRef, Ref } from 'react';

import Box from 'components/core/Box';

import { TEXT_INPUT_BASE_PADDING_VERTICAL_SPACING } from 'components/core/TextInputBase/TextInputBase.constants';
import { getInputColor } from 'components/core/TextInputBase/TextInputBase.helpers';
import spacing from 'theme/spacing';

import { TTextInputProps } from './TextInput.types';
import { ICON_SIZE, TEXT_INPUT_HEIGHT } from './TextInput.constants';
import { StyledTextInputBase } from './TextInput.styles';

function TextInput(
  { rightIcon: RightIcon, editable = true, ...rest }: TTextInputProps,
  ref: Ref<HTMLInputElement>
) {
  function renderRightIcon() {
    if (!RightIcon) {
      return <></>;
    }

    return (
      <Box
        position="absolute"
        right={spacing.m}
        top={TEXT_INPUT_BASE_PADDING_VERTICAL_SPACING}
        paddingY="s"
        pointerEvents="none">
        <RightIcon width={ICON_SIZE} height={ICON_SIZE} iconColor={getInputColor({ editable })} />
      </Box>
    );
  }

  return (
    <StyledTextInputBase
      ref={ref}
      variant="input"
      editable={editable}
      {...rest}
      height={TEXT_INPUT_HEIGHT}
      hasRightIcon={!!RightIcon}
      rightComponent={renderRightIcon()}
    />
  );
}

export default forwardRef(TextInput);
