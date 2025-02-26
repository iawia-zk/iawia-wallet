import Box from 'components/core/Box';

import { StyledCloseIcon } from 'components/AlertModal/AlertModal.styles';

import { XCloseIcon } from 'components/core/Icon';
import { TModalLayoutProps } from '../Modal.types';

function ModalLayout({
  children,
  layout,
  transparent,
  maxHeight,
  height,
  backgroundColor,
  pt = { _: 'm', s: 'l' },
}: TModalLayoutProps) {
  if (layout === 'pageModal') {
    return <>{children}</>;
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={(e) => e.stopPropagation()}>
      <Box
        position="relative"
        backgroundColor={transparent ? 'transparent' : backgroundColor}
        pt={pt}
        px={{ _: 'm', s: 'l' }}
        pb={{ _: 'm', s: 'l' }}
        borderRadius="2rem"
        gap="xl"
        maxHeight={maxHeight}
        height={height}
        {...((maxHeight || height) && { overflow: 'auto' })}
        width={{ _: 'calc(100vw - 3rem)', s: '28rem' }}>
        {!transparent && (
          <StyledCloseIcon>
            <XCloseIcon iconColor="backgroundTertiary" />
          </StyledCloseIcon>
        )}
        {children}
      </Box>
    </div>
  );
}

export default ModalLayout;
