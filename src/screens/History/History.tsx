import { ReactElement } from 'react';
import Box from 'components/core/Box';
import Page from 'components/Page';
import HistoryCompanyItem from './views/HistoryCompanyItem';
import { MOCK_HISTORY_ITEMS } from './History.constants';

function History(): ReactElement {
  return (
    <Page>
      <Box p="m" gap="m">
        {MOCK_HISTORY_ITEMS.map((item) => (
          <HistoryCompanyItem key={item.company.id} item={item} />
        ))}
      </Box>
    </Page>
  );
}

export default History;
