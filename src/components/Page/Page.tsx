import { PageContainer } from './Page.styles';
import { Header } from '../Header/Header';
import { TPageProps } from './Page.types';

export const Page = ({ children, header, title, back }: TPageProps) => {
  return (
    <PageContainer>
      {header && <Header title={title} back={back} />}
      {children}
    </PageContainer>
  );
};

export default Page;
