import { ReactElement, Ref, forwardRef } from 'react';
import { StyledBox } from './Box.styles';
import { TBoxProps } from './Box.types';

function Box(
  { children, className, ...rest }: TBoxProps,
  ref: Ref<HTMLInputElement>
): ReactElement {
  return (
    <StyledBox ref={ref} className={className} {...rest}>
      {children}
    </StyledBox>
  );
}

export default forwardRef(Box);
