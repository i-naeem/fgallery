import { Text, HStack, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const SidebarItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = to === location.pathname;

  return (
    <Button
      p="2"
      width="220px"
      color="black"
      role="button"
      fontSize="xl"
      variant="ghost"
      colorScheme="blue"
      isActive={isActive}
      borderRadius="base"
      borderEndRadius="3xl"
    >
      <HStack flexGrow="1" px="4">
        {icon}
        <Text fontSize="md" fontWeight="medium" px="3">
          {label}
        </Text>
      </HStack>
    </Button>
  );
};

export default SidebarItem;
