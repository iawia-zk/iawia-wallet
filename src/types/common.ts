import { ReactNode } from 'react';
import en from 'translations/en.json';

export type TChildrenOnly = { children?: ReactNode };

export type TI18nId = keyof typeof en;
