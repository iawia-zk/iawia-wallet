import { TTextVariants } from './theme.types';

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from './fonts';

const textVariants: TTextVariants = {
  titleWeb: {
    ...FONT_SIZE.titleWeb,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.bold,
  },
  titleSection: {
    ...FONT_SIZE.titleSection,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.bold,
  },
  titleSubsection: {
    ...FONT_SIZE.titleSubsection,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  textBodyBold: {
    ...FONT_SIZE.textBody,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  textBody: {
    ...FONT_SIZE.textBody,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.normal,
  },
  textBodySubBold: {
    ...FONT_SIZE.textBodySub,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  textBodySub: {
    ...FONT_SIZE.textBodySub,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.normal,
  },
  textBodySmallBold: {
    ...FONT_SIZE.textSmall,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  textBodySmall: {
    ...FONT_SIZE.textSmall,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.normal,
  },
};

export { textVariants };
