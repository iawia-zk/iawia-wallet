import { memo } from 'react';

import Box from 'components/core/Box';
import Text from 'components/core/Text';

import { TListItemBaseProps } from './ListItemBase.types';
import { LIST_ITEM_BASE_MIN_HEIGHT } from './ListItemBase.constants';
import { getListItemStateStyle } from './ListItemBase.helpers';
import { StyledListItemBaseButton } from './ListItemBase.styles';
import ListItemBaseRightArrow from './views/ListItemBaseRightArrow';

function ListItemBase({
  labelId,
  labelProps,
  descriptionId,
  descriptionProps,
  containerProps,
  left,
  right,
  onPress,
  disabled = false,
  isActive = false,
  hasArrow,
  marginTop,
  marginBottom,
  minHeight = LIST_ITEM_BASE_MIN_HEIGHT,
  hasError = false,
}: TListItemBaseProps) {
  const hasDescription = descriptionId || descriptionProps;

  const { labelColor, descriptionColor, borderRadius, backgroundColor } = getListItemStateStyle({
    disabled,
    hasError,
  });

  return (
    <Box width="100%" marginTop={marginTop} marginBottom={marginBottom} position="relative">
      <StyledListItemBaseButton
        onClick={onPress}
        disabled={disabled}
        isActive={isActive}
        hasError={hasError}
        labelProps={labelProps}
        descriptionProps={descriptionProps}>
        <Box
          minHeight={minHeight}
          display="flex"
          flexDirection="row"
          alignItems="center"
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          className="list-item-base-container"
          gap="s"
          p="s"
          {...containerProps}>
          {typeof left === 'function' ? left({ hasError, disabled }) : left}
          <Box display="flex" flexDirection="column" gap="xxs" flex={1}>
            <Box display="flex" flexDirection="row" alignItems="center" gap="s">
              <Text
                textId={labelId}
                variant="textBodyBold"
                color={labelColor}
                {...labelProps}
                className="list-item-base-label"
              />
            </Box>
            {hasDescription && (
              <Text
                textId={descriptionId}
                variant="textBodySub"
                color={descriptionColor}
                className="list-item-base-description"
                {...descriptionProps}
              />
            )}
          </Box>
          {typeof right === 'function' ? right({ hasError, disabled }) : right}
          {hasArrow && <ListItemBaseRightArrow disabled={disabled} />}
        </Box>
      </StyledListItemBaseButton>
    </Box>
  );
}

export default memo(ListItemBase);
