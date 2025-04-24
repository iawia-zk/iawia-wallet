import ListItemBase from 'components/core/ListItemBase';
import IconBox from 'components/core/IconBox';

import { TListItemBaseStates } from 'components/core/ListItemBase/ListItemBase.types';

import { TListItemProps } from './ListItem.types';

function ListItem({
  labelId,
  labelProps,
  descriptionId,
  descriptionProps,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconColor = 'textSecondary',
  iconBackgroundColor = 'backgroundPrimary',
  onPress,
  disabled,
  iconBoxProps,
  hasError,
  minHeight,
}: TListItemProps) {
  function renderLeftComponent({ hasError: hasErrorValue }: TListItemBaseStates) {
    if (LeftIcon) {
      return (
        <IconBox
          icon={LeftIcon}
          iconColor={hasErrorValue ? 'statusErrorPrimary' : iconColor}
          backgroundColor={iconBackgroundColor}
          className={iconBackgroundColor || 'list-item-base-icon-container'}
          containerProps={{
            alignSelf: 'flex-start',
          }}
          {...iconBoxProps}
        />
      );
    }
    return undefined;
  }

  function renderRightComponent() {
    if (RightIcon) {
      return (
        <IconBox
          icon={RightIcon}
          iconColor={hasError ? 'statusErrorPrimary' : iconColor}
          backgroundColor={iconBackgroundColor}
          className={iconBackgroundColor || 'list-item-base-icon-container'}
          containerProps={{
            alignSelf: 'flex-start',
          }}
          {...iconBoxProps}
        />
      );
    }
    return undefined;
  }
  return (
    <ListItemBase
      labelId={labelId}
      labelProps={labelProps}
      descriptionId={descriptionId}
      descriptionProps={descriptionProps}
      onPress={onPress}
      left={renderLeftComponent}
      right={renderRightComponent}
      disabled={disabled}
      hasError={hasError}
      minHeight={minHeight}
    />
  );
}

export default ListItem;
