import { TButtonProps } from 'components/core/Button/Button.types';

import { TPopconfirmVariant } from './PopconfirmModal.types';

export function getDefaultConfirmButtonVariant(type: TPopconfirmVariant): TButtonProps['variant'] {
  if (type === 'danger') {
    return 'error';
  }

  return 'primary';
}
