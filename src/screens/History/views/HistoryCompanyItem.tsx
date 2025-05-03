import { ReactElement } from 'react';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import CheckVerified01Icon from 'components/core/Icon/views/CheckVerified01Icon';
import XCloseIcon from 'components/core/Icon/views/XCloseIcon';
import spacing from 'theme/spacing';
import { TCompanyZKItem } from '../History.types';

type THistoryCompanyItemProps = {
  item: TCompanyZKItem;
};

function HistoryCompanyItem({ item }: THistoryCompanyItemProps): ReactElement {
  const { company, zkList } = item;

  return (
    <Box borderWidth="1px" borderStyle="solid" borderColor="borderOutline" borderRadius="l" p="m">
      <Box flexDirection="row" alignItems="center" gap="m">
        <img
          src={company.logoUrl}
          alt={company.name}
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
        <Text variant="textBodyBold">{company.name}</Text>
      </Box>

      <Box mt="m" gap="s">
        {zkList.map((zk) => (
          <Box
            key={`${zk.zkType}-${zk.createdAt}`}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p="s"
            backgroundColor="backgroundSecondary"
            borderRadius={spacing.m}>
            <Box>
              <Text variant="textBodySmall">{zk.zkType.replace(/_/g, ' ')}</Text>
              <Text variant="textBodySmall" color="textSecondary">
                {new Date(zk.createdAt).toLocaleDateString()}
              </Text>
            </Box>
            <Box color={zk.verified ? 'statusPositivePrimary' : 'statusErrorPrimary'}>
              {zk.verified ? (
                <CheckVerified01Icon iconColor="textPrimary" />
              ) : (
                <XCloseIcon iconColor="textPrimary" />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HistoryCompanyItem;
