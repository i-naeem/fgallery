import {
  Box,
  Menu,
  Text,
  Avatar,
  VStack,
  Button,
  Center,
  MenuList,
  IconButton,
  MenuButton,
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
      <MenuList minWidth="350px" as="div">
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
        <MenuDivider />
        <Center py="3">
          <Button minW="70%" variant="outline">
            Sign out
          </Button>
        </Center>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
