import { Ref, useImperativeHandle, useState, forwardRef, createRef } from 'react';

import Modal, { useModal } from 'components/core/Modal';
import ModalLayout from 'components/ModalLayout';

import { TAlertModalRef, TModalState, TAlertModalVariant } from './AlertModal.types';
import { ALERT_MODAL_ICON } from './AlertModal.constants';

export const alertModalRef = createRef<TAlertModalRef>();

function AlertModal(_: unknown, ref: Ref<TAlertModalRef>) {
  const modalRef = useModal();
  const [modalState, setModalState] = useState<TModalState>();
  const Icon = modalState?.icon ?? ALERT_MODAL_ICON[modalState?.variant as TAlertModalVariant];

  useImperativeHandle(
    ref,
    () => ({
      show: showModal,
      hide: hideModal,
    }),
    []
  );

  function showModal(state: TModalState) {
    setModalState(state);
    modalRef.current?.show();
  }

  function hideModal() {
    modalRef.current?.hide();
  }

  function handleOnDismiss() {
    modalState?.onDismiss?.();
    setModalState(undefined);
  }

  return (
    <Modal ref={modalRef} afterClose={handleOnDismiss} outsideClosable>
      {modalState && (
        <ModalLayout
          type="default"
          titleId={modalState.titleId}
          titleProps={modalState.titleProps}
          descriptionId={modalState.descriptionId}
          descriptionProps={modalState.descriptionProps}
          icon={Icon}
          iconColor={modalState.iconColor}
          buttons={modalState.buttons}
        />
      )}
    </Modal>
  );
}

export default forwardRef(AlertModal);
