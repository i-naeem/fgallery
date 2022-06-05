import { Icon } from '@chakra-ui/react';
import { FaCog, FaCogs, FaSearch, FaUpload } from 'react-icons/fa';

export const SearchIcon = props => <Icon as={FaSearch} {...props} />;
export const UploadIcon = props => <Icon as={FaUpload} {...props} />;
export const SettingsIcon = props => <Icon as={FaCog} {...props} />;
