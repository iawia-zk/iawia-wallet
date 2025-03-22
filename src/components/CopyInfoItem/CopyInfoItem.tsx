import Box from 'components/core/Box';
import Text from 'components/core/Text';
import { FileCheck03Icon, Copy07Icon } from 'components/core/Icon';

import useCopy from 'hooks/useCopy';

import { COPY_ITEM_MIN_HEIGHT } from './CopyInfoItem.constants';
import { getCopyInfoItemStyle } from './CopyInfoItem.helpers';
import { TCopyInfoItemProps } from './CopyInfoItem.types';
import { StyledCopyInfoItemButton } from './CopyInfoItem.styles';

function CopyInfoItem({ labelId, labelProps, value, onCopied, marginBottom }: TCopyInfoItemProps) {
  const { copied, copy } = useCopy();
  const copyInfoItemStyle = getCopyInfoItemStyle({ copied });
  const Icon = copied ? FileCheck03Icon : Copy07Icon;

  async function handleCopy() {
    try {
      if (navigator.clipboard) {
        await copy(value);
        onCopied?.();
      }
    } catch (e) {
      // no log
    }
  }

  return (
    <Box marginBottom={marginBottom} width="100%">
      <StyledCopyInfoItemButton type="button" onClick={handleCopy}>
        <Box flexDirection="row" alignItems="center" minHeight={COPY_ITEM_MIN_HEIGHT}>
          <Box flex={1}>
            <Text textId={labelId} variant="textBodySub" color="textSecondary" {...labelProps} />
            <Text variant="textBodySubBold" mt="xxs" color={copyInfoItemStyle.valueColor}>
              {value}
            </Text>
          </Box>
          <Box alignSelf="flex-end" flexDirection="row" alignItems="center">
            <Text
              textId={copied ? 'label.copied' : 'label.copy'}
              variant="textBodySub"
              color={copyInfoItemStyle.iconColor}
              mr="xs"
            />
            <Icon iconColor={copyInfoItemStyle.iconColor} />
          </Box>
        </Box>
      </StyledCopyInfoItemButton>
    </Box>
  );
}

export default CopyInfoItem;
