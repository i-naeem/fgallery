import {
  Box,
  Text,
  HStack,
  Button,
  Center,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

const GotoButton = props => {
  return (
    <Button w="180px" bgColor="#1A73E8" colorScheme="blue" borderRadius="base">
      Go to FGallery
    </Button>
  );
};

const Home = props => {
  return (
    <Box>
      <Box as="header" height="75px" boxShadow="base">
        <HStack p="2" justify="space-between" align="center" height="100%">
          <Heading>Google</Heading>

          <HStack>
            <GotoButton />
            <ColorModeSwitcher />
          </HStack>
        </HStack>
      </Box>

      <Box height="calc(90vh - 75px)">
        <Center height="100%">
          <VStack>
            <Text
              fontWeight="medium"
              textAlign="center"
              marginBottom="5"
              fontSize="6xl"
              lineHeight="1"
            >
              <Text>The home for your</Text>
              <Text>memories</Text>
            </Text>

            <GotoButton />
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
