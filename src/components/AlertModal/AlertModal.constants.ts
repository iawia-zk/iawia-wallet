import { FC } from 'react';

import { TAlertModalVariant } from 'components/AlertModal/AlertModal.types';
import { TIconProps } from 'components/core/Icon/Icon.types';
import { AlertCircleIcon, CheckCircleIcon } from 'components/core/Icon';

export const ALERT_MODAL_ICON: { [key in TAlertModalVariant]: FC<TIconProps> } = {
  error: AlertCircleIcon,
  success: CheckCircleIcon,
};
