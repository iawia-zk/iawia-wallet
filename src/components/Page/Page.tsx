import { PageContainer } from './Page.styles';
import { Header } from '../Header/Header';
import { TPageProps } from './Page.types';
import Box from 'components/core/Box';

export const Page = ({ children, header, title, back }: TPageProps) => {
  return (
    <PageContainer>
      {header && <Header title={title} back={back} />}
      <Box padding={'s'}>{children}</Box>
    </PageContainer>
  );
};

export default Page;
