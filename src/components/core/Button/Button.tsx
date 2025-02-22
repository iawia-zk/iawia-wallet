import Box from 'components/core/Box';
import Text from 'components/core/Text';
import ActivityIndicator from 'components/core/ActivityIndicator';

import { TButtonProps } from './Button.types';
import { getButtonSize, getButtonStyle } from './Button.helpers';
import { StyledButton } from './Button.styles';
import { BUTTONS_VARIANT_STATE_MAP } from './Button.constants';

function Button({
  type = 'button',
  className,
  labelProps,
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  block = true,
  onPress,
}: TButtonProps) {
  const buttonSize = getButtonSize({ size });
  const buttonStyle = getButtonStyle({ variant, disabled, loading });
  const buttonVariant = BUTTONS_VARIANT_STATE_MAP[variant];
  const buttonBorderWidth = buttonSize.borderWidth[variant];

  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onPress}
      disabled={disabled || loading}
      variant={buttonVariant}>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight={buttonSize.minHeight}
        padding={buttonSize.padding}
        borderRadius={buttonSize.borderRadius}
        borderColor={buttonStyle.border}
        borderStyle="solid"
        borderWidth={buttonBorderWidth}
        backgroundColor={buttonStyle.background}
        gap="s"
        {...(block && { flex: 1 })}>
        {loading && (
          <Box
            alignItems="center"
            justifyContent="center"
            width={buttonSize.iconSize}
            height={buttonSize.iconSize}>
            <ActivityIndicator color={buttonStyle.text} />
          </Box>
        )}
        {!loading && LeftIcon && (
          <Box>
            <LeftIcon
              width={buttonSize.iconSize}
              height={buttonSize.iconSize}
              iconColor={buttonStyle.text}
            />
          </Box>
        )}
        <Text
          as="span"
          color={buttonStyle.text}
          variant={buttonSize.textVariant}
          numberOfLines={1}
          {...labelProps}>
          {children}
        </Text>
        {RightIcon && (
          <Box>
            <RightIcon
              width={buttonSize.iconSize}
              height={buttonSize.iconSize}
              iconColor={buttonStyle.text}
            />
          </Box>
        )}
      </Box>
    </StyledButton>
  );
}

export default Button;
