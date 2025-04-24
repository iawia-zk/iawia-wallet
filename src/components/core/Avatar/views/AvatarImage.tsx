import { TAvatarImageProps } from '../Avatar.types';
import StyledImage from '../Avatar.styles';

function AvatarImage({ size, resizeMode, borderRadius, uri }: TAvatarImageProps) {
  return (
    <StyledImage size={size} borderRadius={borderRadius} src={uri} imageResizeMode={resizeMode} />
  );
}

export default AvatarImage;
