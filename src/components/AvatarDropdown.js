import { Avatar, IconButton } from '@chakra-ui/react';

const AvatarDropdown = props => {
  return (
    <IconButton
      icon={
        <Avatar
          role="button"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
      }
      size="sm"
      isRound
    />
  );
};

export default AvatarDropdown;