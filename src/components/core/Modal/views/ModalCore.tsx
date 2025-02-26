import { useEffect, ReactPortal, ReactNode } from 'react';
import ReactDOM from 'react-dom';

function ModalCore({ children, rootId }: { children: ReactNode; rootId?: string }): ReactPortal {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const modalElement = document.getElementById(rootId as string) ?? document.body;
  return ReactDOM.createPortal(children, modalElement);
}

export default ModalCore;
