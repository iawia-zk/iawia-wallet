import { LottieProps, Options } from 'react-lottie';

export type TLottieViewProps = {
  className?: string;
  autoPlay?: Options['autoplay'];
  loop?: Options['loop'];
  source: Options['animationData'];
} & Pick<LottieProps, 'width' | 'height'>;
