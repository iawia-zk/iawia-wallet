import { ReactElement, forwardRef, Ref, useImperativeHandle, useState, useRef } from 'react';

import ZIndex from 'constants/zIndex';

import ModalCore from './views/ModalCore';
import ModalLayout from './views/ModalLayout';
import { ModalContainer } from './Modal.styles';
import { TModalProps, TModalRef } from './Modal.types';
import { MODAL_TRANSITION } from './Modal.constants';
import { useModalClose } from './Modal.hooks';

function Modal(
  {
    children,
    rootId,
    afterOpen,
    afterClose,
    zIndex = ZIndex.COMMON_MODAL,
    isFullPage,
    outsideClosable,
    layout = 'modal',
    transparent = false,
    transition = MODAL_TRANSITION,
    maxHeight,
    height,
    backgroundColor = 'backgroundTertiary',
    pt,
  }: TModalProps,
  ref: Ref<TModalRef>
): ReactElement {
  const [visible, setVisible] = useState<boolean>(false);
  useModalClose({
    visible: visible && !isFullPage && !transparent,
    onClose: hide,
  });

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  function hide() {
    setVisible(false);
    afterClose?.();
  }

  function show() {
    setVisible(true);
    afterOpen?.();
  }

  return visible ? (
    <ModalCore rootId={rootId}>
      <ModalContainer
        layout={layout}
        zIndex={zIndex}
        {...(outsideClosable && {
          onClick: hide,
        })}
        isFullPage={isFullPage}
        animate={{ opacity: 1 }}
        transition={transition}>
        <ModalLayout
          layout={layout}
          transparent={transparent}
          maxHeight={maxHeight}
          height={height}
          pt={pt}
          backgroundColor={backgroundColor}>
          {children}
        </ModalLayout>
      </ModalContainer>
    </ModalCore>
  ) : (
    <></>
  );
}

export const useModal = () => useRef<TModalRef>(null);

export default forwardRef(Modal);
