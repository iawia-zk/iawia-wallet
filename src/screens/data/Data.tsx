import { FC } from 'react';
import Box from 'components/core/Box';
import Page from '../../components/Page';
import DataItem from './views/DataItem';
import { MOCK_DATA_ITEMS } from './Data.constants';

const Data: FC = () => (
  <Page>
    <Box p="m" gap="m">
      {MOCK_DATA_ITEMS.map((item) => (
        <DataItem key={item.dataType} {...item} />
      ))}
    </Box>
  </Page>
);

export default Data;
