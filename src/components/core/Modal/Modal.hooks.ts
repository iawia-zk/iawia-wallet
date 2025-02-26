import { useEffect } from 'react';

import { TUseModalCloseParams } from './Modal.types';

export function useModalClose({ visible, onClose }: TUseModalCloseParams) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose?.();
      }
    }

    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);
}
