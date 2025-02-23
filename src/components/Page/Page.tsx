import Box from 'components/core/Box';
import { PageContainer } from './Page.styles';
import { Header } from '../Header/Header';
import { TPageProps } from './Page.types';

export const Page = ({ children, header, title, back }: TPageProps) => (
  <PageContainer>
    {header && <Header title={title} back={back} />}
    <Box padding="s" id="wrapper">
      {children}
    </Box>
  </PageContainer>
);

export default Page;
