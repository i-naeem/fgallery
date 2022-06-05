import { Box, HStack, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, useLocation } from 'react-router-dom';
import GotoButton from '../GotoButton';

const Header = props => {
  const location = useLocation();

  return (
    <Box as="header" height="75px" boxShadow="base">
      <HStack p="2" justify="space-between" align="center" height="100%">
        <Link to="/">
          <Heading>Google</Heading>
        </Link>

        <HStack>
          {location.pathname === '/login' ? null : <GotoButton />}
          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
