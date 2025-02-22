import Lottie from 'react-lottie';

import { LottieWrapper } from './LottieView.styles';
import { TLottieViewProps } from './LottieView.types';

function LottieView({
  className,
  width,
  height,
  autoPlay = true,
  loop = true,
  source,
}: TLottieViewProps) {
  return (
    <LottieWrapper className={className}>
      <Lottie
        width={width}
        height={height}
        options={{
          autoplay: autoPlay,
          loop,
          animationData: source,
        }}
      />
    </LottieWrapper>
  );
}

export default LottieView;
