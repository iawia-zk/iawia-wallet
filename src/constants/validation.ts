import { object, string } from 'yup';

export const REQUIRED_VALIDATION = string().trim().required('This field is required');
export const REQUIRED_OBJECT_VALIDATION = object().required('This field is required');
export const NOT_REQUIRED_VALIDATION = string().notRequired();
