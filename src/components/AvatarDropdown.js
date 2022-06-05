import {
  Menu,
  Avatar,
  MenuList,
  MenuItem,
  IconButton,
  MenuButton,
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
      <MenuList>
        <MenuItem>TODO</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
