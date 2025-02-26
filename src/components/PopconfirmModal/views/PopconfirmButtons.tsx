import { useState } from 'react';

import Button from 'components/core/Button';
import Box from 'components/core/Box';

import { TPopconfirmButtonsProps } from '../PopconfirmModal.types';
import { getDefaultConfirmButtonVariant } from '../PopconfirmModal.helpers';

function PopconfirmButtons({
  type,
  confirmButtonId = 'button.confirm',
  confirmButtonProps,
  onConfirm,
  showCancel = true,
  cancelButtonId = 'button.cancel',
  cancelButtonProps,
  onCancel,
  hideModal,
}: TPopconfirmButtonsProps) {
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  async function handleConfirm() {
    try {
      setConfirmLoading(true);
      await onConfirm?.();
      hideModal();
    } finally {
      setConfirmLoading(false);
    }
  }

  return (
    <Box gap="m">
      {showCancel && (
        <Button
          labelId={cancelButtonId}
          variant="secondary"
          onPress={onCancel}
          {...cancelButtonProps}
        />
      )}
      <Button
        labelId={confirmButtonId}
        variant={getDefaultConfirmButtonVariant(type)}
        {...confirmButtonProps}
        loading={confirmLoading}
        onPress={handleConfirm}
      />
    </Box>
  );
}

export default PopconfirmButtons;
