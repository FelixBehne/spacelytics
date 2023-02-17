import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';

import { Logo } from '../../components/Logo';
import { OAuthButtonGroup } from '../../components/OAuthButtonGroup';
import { PasswordField } from '../../components/PasswordField';
import dynamic from 'next/dynamic';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const StarSky = dynamic(() => import('../../components/StarSky'), {
  ssr: false,
});

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
      toast({
        title: 'Email is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!password) {
      setPasswordError(true);
      toast({
        title: 'Password is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const result = await signIn('credentials', {
      username: email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast({
        title: 'Invalid email or password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '20' }}
      px={{ base: '0', sm: '8' }}
    >
      <Box
        position='absolute'
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex='-1'
      >
        <StarSky />
      </Box>
      <Stack spacing='8'>
        <Stack spacing='2'>
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={{ base: 'lg', md: 'lg' }}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Heading
                size='sm'
                color='muted'
                fontSize='sm'
                fontWeight='normal'
              >
                Start your journey with us today
              </Heading>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'lg' }}
          rounded={{ base: 'none', sm: 'lg' }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl isInvalid={emailError}>
                <FormLabel htmlFor='email' color='muted' fontSize='sm'>
                  Email
                </FormLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderColor={emailError ? 'red.500' : 'gray.300'}
                />
              </FormControl>
              <PasswordField
                isInvalid={passwordError}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button
                variant='outline'
                width='full'
                mt='4'
                _hover={{ color: 'black', bg: 'gray.100' }}
                onClick={() => {
                  handleLogin();
                }}
              >
                Log in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  Or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
