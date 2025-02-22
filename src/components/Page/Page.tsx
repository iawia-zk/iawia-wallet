import { FC, ReactNode } from 'react';
import { PageContainer } from './Page.styles';

interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <PageContainer className="page">
      {children}
    </PageContainer>
  );
};

export default Page; 