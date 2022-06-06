import { Text, HStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const SidebarItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = to === location.pathname;

  return (
    <Text
      p="2"
      role="button"
      fontSize="xl"
      borderRadius="base"
      borderEndRadius="3xl"
      _hover={{ bgColor: 'gray.100' }}
      _active={{ bgColor: 'blue.100' }}
      sx={{ bgColor: isActive ? 'blue.100' : '' }}
    >
      <HStack px="4">
        {icon}
        <Text fontSize="md" fontWeight="medium" px="4">
          {label}
        </Text>
      </HStack>
    </Text>
  );
};

export default SidebarItem;
