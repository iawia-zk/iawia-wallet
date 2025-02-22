import MEDIA_BREAK_POINTS from './media';
import { TBreakpoints } from './theme.types';

const BREAKPOINTS: TBreakpoints = [
  MEDIA_BREAK_POINTS.xSmall,
  MEDIA_BREAK_POINTS.small,
  MEDIA_BREAK_POINTS.medium,
  MEDIA_BREAK_POINTS.large,
  MEDIA_BREAK_POINTS.xLarge,
];

const [xs, s, m, l, xl] = BREAKPOINTS;

BREAKPOINTS.xs = xs;
BREAKPOINTS.s = s;
BREAKPOINTS.m = m;
BREAKPOINTS.l = l;
BREAKPOINTS.xl = xl;

export default BREAKPOINTS;
