import { Box, HStack, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import GotoButton from '../GotoButton';

const Header = props => {
  return (
    <Box as="header" height="75px" boxShadow="base">
      <HStack p="2" justify="space-between" align="center" height="100%">
        <Heading>Google</Heading>

        <HStack>
          <GotoButton />
          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
