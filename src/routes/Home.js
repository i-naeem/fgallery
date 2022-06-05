import { Box, Text, Center, VStack } from '@chakra-ui/react';
import GotoButton from '../components/GotoButton';
import Header from '../components/Header/Header';

const Home = props => {
  return (
    <Box>
      <Header />

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
