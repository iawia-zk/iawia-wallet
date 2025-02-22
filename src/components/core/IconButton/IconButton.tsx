import Box from 'components/core/Box';
import ActivityIndicator from 'components/core/ActivityIndicator';

import { TIconButtonProps } from './IconButton.types';
import { getIconButtonSize, getIconButtonStyle } from './IconButton.helpers';
import { StyledIconButton } from './IconButton.styles';

function IconButton({
  variant = 'primary',
  size = 'medium',
  loading = false,
  icon: Icon,
  disabled,
  onPress,
  ...rest
}: TIconButtonProps) {
  const iconButtonStyle = getIconButtonStyle({ variant, disabled, loading });
  const iconButtonSize = getIconButtonSize({ size });

  return (
    <StyledIconButton
      type="button"
      disabled={disabled || loading}
      onClick={onPress}
      loading={loading}
      variant={variant}
      {...rest}>
      <Box>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          className="icon-button-container"
          width={iconButtonSize.iconBoxSize}
          height={iconButtonSize.iconBoxSize}
          borderRadius={iconButtonSize.borderRadius}
          borderColor={iconButtonStyle.border}
          backgroundColor={iconButtonStyle.background}>
          {loading ? (
            <Box
              alignItems="center"
              justifyContent="center"
              width={iconButtonSize.iconSize}
              height={iconButtonSize.iconSize}>
              <ActivityIndicator color={iconButtonStyle.text} />
            </Box>
          ) : (
            <Icon
              width={iconButtonSize.iconSize}
              height={iconButtonSize.iconSize}
              iconColor={iconButtonStyle.text}
            />
          )}
        </Box>
      </Box>
    </StyledIconButton>
  );
}

export default IconButton;
