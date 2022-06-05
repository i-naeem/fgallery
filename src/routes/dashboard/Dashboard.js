import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import { Box, Heading, HStack, Container } from '@chakra-ui/react';
import Searchbar from '../../components/Searchbar';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = props => {
  return (
    <Box>
      <Box as="header" height="75px" boxShadow="base">
        <HStack p="2" justify="space-between" align="center" height="100%">
          <Link to="/">
            <Heading>Google</Heading>
          </Link>

          <Container maxWidth="90vw">
            <HStack justify="space-between">
              <Searchbar maxWidth="800px" />
              <ColorModeSwitcher />
            </HStack>
          </Container>
        </HStack>
      </Box>

      <Box height="calc(90vh - 75px)">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
