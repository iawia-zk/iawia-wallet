import { TSegmentedControlOption } from 'components/core/SegmentedControl/SegmentedControl.types';
import { TI18nId } from 'types/common';
import I18n from 'configs/i18n';

export enum WalletTabOption {
  TOKENS = 'TOKENS',
  ACTIVITY = 'ACTIVITY',
}

export const SEGMENTED_CONTROL_OPTIONS: TSegmentedControlOption<WalletTabOption>[] = [
  {
    labelId: I18n.t('label.tokens').toLowerCase() as TI18nId,
    value: WalletTabOption.TOKENS,
  },
  {
    labelId: I18n.t('label.activity').toLowerCase() as TI18nId,
    value: WalletTabOption.ACTIVITY,
  },
];
