import { TShimmerTypeKeys, TShimmerStyleProperties } from './Shimmer.types';

export const SHIMMER_STYLE_MAP: Record<TShimmerTypeKeys, TShimmerStyleProperties> = {
  line: {
    height: '0.6875rem',
    width: '25%',
  },
  button: {
    width: '100%',
    borderRadius: '4rem',
  },
  rect: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.375rem',
  },
  circle: {
    width: '2rem',
    height: '2rem',
    borderRadius: '4rem',
  },
  cardCircle: {
    width: '5rem',
    height: '5rem',
    borderRadius: '5rem',
  },
  card: {
    height: '8.75rem',
  },
  input: {
    height: '3.5rem',
  },
  avatar: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '3.5rem',
  },
};
