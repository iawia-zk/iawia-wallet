import { Ref, useImperativeHandle, useState, forwardRef } from 'react';

import Modal, { useModal } from 'components/core/Modal';
import ModalTopContent from 'components/ModalTopContent';
import Box from 'components/core/Box';

import PopconfirmButtons from './views/PopconfirmButtons';
import { TPopconfirmModalRef, TModalState } from './PopconfirmModal.types';

function PopconfirmModal(_: unknown, ref: Ref<TPopconfirmModalRef>) {
  const modalRef = useModal();
  const [modalState, setModalState] = useState<TModalState>();

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

  function handleCancel() {
    modalState?.onCancel?.();
    hideModal();
  }

  const type = modalState?.type ?? 'default';

  return (
    <Modal
      ref={modalRef}
      afterClose={handleOnDismiss}
      backgroundColor="backgroundPrimary"
      outsideClosable>
      {modalState && (
        <Box gap="xl">
          <ModalTopContent
            type={type}
            titleId={modalState.titleId}
            titleProps={modalState.titleProps}
            descriptionId={modalState.descriptionId}
            descriptionProps={modalState.descriptionProps}
            icon={modalState.icon}
            lottie={modalState.lottie}
            iconColor={modalState.iconColor}
            content={modalState.content}
          />
          <PopconfirmButtons
            type={type}
            confirmButtonId={modalState.confirmButtonId}
            confirmButtonProps={modalState.confirmButtonProps}
            showCancel={modalState.showCancel}
            onConfirm={modalState.onConfirm}
            onCancel={handleCancel}
            hideModal={hideModal}
            cancelButtonId={modalState.cancelButtonId}
            cancelButtonProps={modalState.cancelButtonProps}
          />
        </Box>
      )}
    </Modal>
  );
}

export default forwardRef(PopconfirmModal);
