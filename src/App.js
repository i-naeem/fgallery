import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  HStack,
  theme,
} from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as="header" height="75px" boxShadow="base">
        <HStack p="2" justify="space-between" align="center" height="100%">
          <Heading>Google</Heading>

          <Button
            w="180px"
            bgColor="#1A73E8"
            colorScheme="blue"
            borderRadius="base"
          >
            Go to FGallery
          </Button>
        </HStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
