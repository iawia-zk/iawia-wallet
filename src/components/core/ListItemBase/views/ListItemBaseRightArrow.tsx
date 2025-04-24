import Box from 'components/core/Box';
import { CheckCircleIcon } from 'components/core/Icon';

import { TListItemBaseStates } from '../ListItemBase.types';

function ListItemBaseRightArrow({ disabled }: TListItemBaseStates) {
  return (
    <Box ml="s">
      <Box className="list-item-base-right-icon-active">
        <CheckCircleIcon iconColor="textActive" />
      </Box>
      <Box className="list-item-base-right-icon-passive">
        <CheckCircleIcon iconColor={disabled ? 'textPassive' : 'textSecondary'} />
      </Box>
    </Box>
  );
}

export default ListItemBaseRightArrow;
