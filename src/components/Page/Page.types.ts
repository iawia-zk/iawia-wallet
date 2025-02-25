import { ReactNode } from 'react';

export type TPageProps = {
  children: ReactNode;
  titleId?: string;
  header?: boolean;
  back?: boolean;
};
