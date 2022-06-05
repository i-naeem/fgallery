import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      marginLeft="2"
      variant="ghost"
      color="current"
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
