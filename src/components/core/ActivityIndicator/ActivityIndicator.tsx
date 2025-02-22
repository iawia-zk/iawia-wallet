import LOTTIES from 'constants/lotties';

import { TActivityIndicatorProps } from './ActivityIndicator.types';
import { StyledActivityIndicator } from './ActivityIndicator.styles';

function ActivityIndicator({
  color = 'textActive',
  width = 24,
  height = 24,
}: TActivityIndicatorProps) {
  return (
    <StyledActivityIndicator source={LOTTIES.spinner} color={color} width={width} height={height} />
  );
}

export default ActivityIndicator;
