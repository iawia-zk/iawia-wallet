import { TIconProps } from 'components/core/Icon/Icon.types';
import { TPopconfirmVariant } from 'components/PopconfirmModal/PopconfirmModal.types';

export function getDefaultIconColor(type: TPopconfirmVariant): TIconProps['iconColor'] | undefined {
  if (type === 'danger') {
    return 'statusErrorPrimary';
  }
  return undefined;
}
