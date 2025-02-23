import { ArrowLeftIcon } from 'components/core/Icon';
import IconButton from 'components/core/IconButton';
import { useNavigate } from 'react-router-dom';

function HeaderBackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return <IconButton icon={ArrowLeftIcon} onPress={handleBack} variant="secondary" />;
}

export default HeaderBackButton;
