import {
  Box,
  Text,
  Input,
  Center,
  Button,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = event => setEmail(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  return (
    <Box>
      <Header />

      <Box height="calc(80vh - 75px)">
        <Center height="100%">
          <Box
            px={5}
            py={20}
            as="form"
            shadow="md"
            flexGrow="1"
            maxW="600px"
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
              <Input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="example@gmail.com"
              />
            </FormControl>

            <FormControl mb="5">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={onPasswordChange}
              />
            </FormControl>

            <Button
              as={Link}
              to="app"
              size="lg"
              width="100%"
              colorScheme="blue"
            >
              Login
            </Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Login;
