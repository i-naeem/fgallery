import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import {
  Box,
  Heading,
  HStack,
  Container,
  Button,
  IconButton,
} from '@chakra-ui/react';
import Searchbar from '../../components/Searchbar';
import { Link, Outlet } from 'react-router-dom';
import { ImageIcon, SettingsIcon, UploadIcon } from '../../assets/icons';
import AvatarDropdown from '../../components/AvatarDropdown';
import SidebarItem from '../../components/SidebarItem';
import { useRef } from 'react';

const Dashboard = props => {
  const ref = useRef();
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

              <HStack>
                <Button
                  variant="ghost"
                  color="gray.500"
                  leftIcon={<UploadIcon />}
                  onClick={() => ref.current.click()}
                >
                  <input type="file" hidden ref={ref} />
                  Upload
                </Button>

                <IconButton
                  aria-label="Settings"
                  color="gray.500"
                  as={Link}
                  to="/settings"
                  variant="ghost"
                  isRound
                  icon={<SettingsIcon />}
                />

                <ColorModeSwitcher />
                <AvatarDropdown />
              </HStack>
            </HStack>
          </Container>
        </HStack>
      </Box>

      <Box height="calc(90vh - 75px)">
        <HStack alignItems="flex-start">
          <Box py="3">
            <SidebarItem icon={<ImageIcon />} label="Photos" to="/app" />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Dashboard;
