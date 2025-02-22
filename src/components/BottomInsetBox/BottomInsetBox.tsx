import { TBottomInsetBoxProps } from './BottomInsetBox.types';
import { StyledBox } from './BottomInsetBox.styles';

function BottomInsetBox({ className, children, sticky, ...rest }: TBottomInsetBoxProps) {
  return (
    <StyledBox className={className} sticky={sticky} {...rest}>
      {children}
    </StyledBox>
  );
}

export default BottomInsetBox;
