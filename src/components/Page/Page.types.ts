import { ReactNode } from 'react';

export type TPageProps = {
  children: ReactNode;
  title?: string;
  header?: boolean;
  back?: boolean;
};
