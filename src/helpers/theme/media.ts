import BREAK_POINTS from "../../theme/media";

function customMediaQuery(breakPointSize: keyof typeof BREAK_POINTS): string {
  return `@media (min-width: ${BREAK_POINTS[breakPointSize]})`;
}

const media = {
  xs: customMediaQuery('xSmall'),
  s: customMediaQuery('small'),
  m: customMediaQuery('medium'),
  l: customMediaQuery('large'),
  xl: customMediaQuery('xLarge'),
};

export default media;
