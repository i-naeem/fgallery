import { ChakraProvider, Text, theme } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>Hello World.</Text>
    </ChakraProvider>
  );
}

export default App;
