import {
  Menu,
  Avatar,
  MenuList,
  MenuItem,
  IconButton,
  MenuButton,
  Box,
  Text,
  VStack,
  Button,
  MenuDivider,
} from '@chakra-ui/react';

const AvatarDropdown = props => {
  return (
    <Menu>
      <MenuButton>
        <IconButton
          as="span"
          icon={
            <Avatar
              name="Avatar Name"
              src="https://bit.ly/dan-abramov"
              size="sm"
            />
          }
          size="sm"
          isRound
        />
      </MenuButton>
      <MenuList minWidth="300px">
        <Box p="5">
          <VStack>
            <Avatar
              name="Avatar Name"
              src="https://bit.ly/dan-abramov"
              size="xl"
            />

            <Text as="div" textAlign="center" mb="5">
              <Text fontWeight="medium">Mohammad Naeem</Text>
              <Text fontSize="xs">example@gmail.com</Text>
            </Text>
          </VStack>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
