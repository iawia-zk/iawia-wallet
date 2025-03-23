import Box from 'components/core/Box';
import ActivityIndicator from 'components/core/ActivityIndicator';
import { PageContainer } from './Page.styles';
import { Header } from '../Header/Header';
import { TPageProps } from './Page.types';

export const Page = ({ children, header, titleId, back, isLoading }: TPageProps) => (
  <PageContainer>
    {header && <Header titleId={titleId} back={back} />}
    <Box padding="s" id="wrapper">
      {isLoading ? (
        <Box marginTop="xl" alignItems="center" justifyContent="center">
          <ActivityIndicator />
        </Box>
      ) : (
        children
      )}
    </Box>
  </PageContainer>
);

export default Page;
