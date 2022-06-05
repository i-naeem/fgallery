import {
  Box,
  Text,
  Input,
  Center,
  Button,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import Header from '../components/Header/Header';

const Login = props => {
  return (
    <Box>
      <Header />

      <Box height="calc(80vh - 75px)">
        <Center height="100%">
          <Box
            px={5}
            py={20}
            as="form"
            maxW="600px"
            flexGrow="1"
            shadow="md"
            borderRadius="md"
            borderWidth="1px"
          >
            <Text
              fontWeight="bold"
              textAlign="center"
              marginBottom="5"
              fontSize="6xl"
              lineHeight="1"
            >
              Login
            </Text>

            <FormControl mb="5">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </FormControl>

            <FormControl mb="5">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Password" />
            </FormControl>

            <Button type="submit" size="lg" width="100%" colorScheme="blue">
              Login
            </Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Login;
