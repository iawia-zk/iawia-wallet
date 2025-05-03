import { TI18nId } from 'types/common';

export enum ZKType {
  NATIONALITY_IS_TUR = 'NATIONALITY_IS_TUR',
  NATIONALITY_IS_NOT_TUR = 'NATIONALITY_IS_NOT_TUR',
  AGE_IS_OVER_18 = 'AGE_IS_OVER_18',
  AGE_IS_OVER_24 = 'AGE_IS_OVER_24',
  AGE_IS_UNDER_18 = 'AGE_IS_UNDER_18',
  GENDER_IS_MAN = 'GENDER_IS_MAN',
  GENDER_IS_WOMAN = 'GENDER_IS_WOMAN',
  PASSPORT_ID_IS_VALID = 'PASSPORT_ID_IS_VALID',
  NATIONALITY_ID_IS_VALID = 'NATIONALITY_ID_IS_VALID',
}

const MAP: Record<ZKType, { titleId: TI18nId }> = {
  [ZKType.NATIONALITY_IS_TUR]: {
    titleId: 'label.nationalityIsTur',
  },
  [ZKType.NATIONALITY_IS_NOT_TUR]: {
    titleId: 'label.nationalityIsNotTur',
  },
  [ZKType.AGE_IS_OVER_18]: {
    titleId: 'label.ageIsOver18',
  },
  [ZKType.AGE_IS_OVER_24]: {
    titleId: 'label.ageIsOver24',
  },
  [ZKType.AGE_IS_UNDER_18]: {
    titleId: 'label.ageIsUnder18',
  },
  [ZKType.GENDER_IS_MAN]: {
    titleId: 'label.genderIsMan',
  },
  [ZKType.GENDER_IS_WOMAN]: {
    titleId: 'label.genderIsWoman',
  },
  [ZKType.PASSPORT_ID_IS_VALID]: {
    titleId: 'label.passportIdIsValid',
  },
  [ZKType.NATIONALITY_ID_IS_VALID]: {
    titleId: 'label.nationalityIdIsValid',
  },
};

export function getTitleIdByZkType(vatRate: ZKType) {
  return MAP[vatRate].titleId;
}
