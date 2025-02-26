import { alertModalRef } from 'components/AlertModal/AlertModal';
import { TModalState } from 'components/AlertModal/AlertModal.types';

function showErrorAlert(params: Omit<TModalState, 'variant'>): void {
  alertModalRef.current?.show({
    ...params,
    titleId: params?.titleId ?? 'errors.unexpectedError',
    variant: 'error',
    iconColor: 'statusErrorPrimary',
    onDismiss: () => {
      params.onDismiss?.();
    },
  });
}

function showSuccessAlert(params: Omit<TModalState, 'variant'>): void {
  alertModalRef.current?.show({
    ...params,
    titleId: params?.titleId ?? 'errors.unexpectedError',
    iconColor: params?.iconColor ?? 'statusPositivePrimary',
    variant: 'success',
  });
}

function showNaturalAlert(params: Omit<TModalState, 'variant'>): void {
  alertModalRef.current?.show({
    ...params,
    titleId: params?.titleId ?? 'errors.unexpectedError',
    variant: 'success',
    iconColor: 'statusNaturalPrimary',
  });
}

export default {
  error: showErrorAlert,
  success: showSuccessAlert,
  natural: showNaturalAlert,
};
