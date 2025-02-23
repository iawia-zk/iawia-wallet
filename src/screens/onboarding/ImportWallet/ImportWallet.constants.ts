import { REQUIRED_VALIDATION } from 'constants/validation';
import { object } from 'yup';

export const FORM_VALIDATION_SCHEMA = object().shape({
  decrypter: REQUIRED_VALIDATION,
});
