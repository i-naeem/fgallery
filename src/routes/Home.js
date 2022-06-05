import { Box, HStack, Heading, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

const Home = props => {
  return (
    <Box as="header" height="75px" boxShadow="base">
      <HStack p="2" justify="space-between" align="center" height="100%">
        <Heading>Google</Heading>

        <HStack>
          <Button
            w="180px"
            bgColor="#1A73E8"
            colorScheme="blue"
            borderRadius="base"
          >
            Go to FGallery
          </Button>

          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Home;
