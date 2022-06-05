import { Icon, IconButton } from '@chakra-ui/react';
import { FaPersonBooth } from 'react-icons/fa';

const AvatarDropdown = props => {
  return <IconButton icon={<Icon as={FaPersonBooth} />} />;
};

export default AvatarDropdown;
