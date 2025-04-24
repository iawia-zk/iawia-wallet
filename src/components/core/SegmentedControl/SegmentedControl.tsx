import { Key, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Box from 'components/core/Box';
import Text from 'components/core/Text';

import { TSegmentedControlProps } from './SegmentedControl.types';
import StyledSegmentedOptionButton from './SegmentedControl.styles';
import { SEGMENTED_CONTROL_ANIMATION_CONFIG } from './SegmentedControl.constants';

const AnimatedBox = motion(Box);

function SegmentedControl<T>({ options, defaultValue, onChange }: TSegmentedControlProps<T>) {
  const [selectedOptionValue, setSelectedOptionValue] = useState<T>(defaultValue);

  const selectedIndex = options.findIndex(({ value }) => value === selectedOptionValue);
  const indicatorWidth = 100 / options.length;
  const indicatorStep = 100 * selectedIndex;

  useEffect(() => {
    setSelectedOptionValue(defaultValue);
  }, [defaultValue]);

  function handleOptionOnPress(value: T) {
    if (selectedOptionValue !== value) {
      setSelectedOptionValue(value);
      onChange?.(value);
    }
  }

  return (
    <Box
      position="relative"
      flexDirection="row"
      width="100%"
      borderWidth={2}
      borderRadius={16}
      borderStyle="solid"
      borderColor="backgroundSecondary"
      backgroundColor="black4"
      height={40}>
      <AnimatedBox
        flexDirection="row"
        backgroundColor="black3"
        width={`${indicatorWidth}%`}
        animate={{ translateX: `${indicatorStep}%` }}
        transition={SEGMENTED_CONTROL_ANIMATION_CONFIG}
        position="absolute"
        minHeight={36}
        borderRadius={14}
      />
      {options.map(({ labelId, value }) => {
        const isSelected = selectedOptionValue === value;
        return (
          <StyledSegmentedOptionButton
            key={value as Key}
            onClick={() => handleOptionOnPress(value)}>
            <Box
              zIndex={1}
              flex={1}
              justifyContent="center"
              alignItems="center"
              px="s"
              py="xs"
              overflow="hidden">
              <Text
                textId={labelId}
                variant={isSelected ? 'textBodyBold' : 'textBody'}
                color={isSelected ? 'textPrimary' : 'textSecondary'}
                numberOfLines={1}
              />
            </Box>
          </StyledSegmentedOptionButton>
        );
      })}
    </Box>
  );
}

export default SegmentedControl;
