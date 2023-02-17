import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { GitHubIcon, GoogleIcon } from './ProviderIcons';

import { signIn } from 'next-auth/react';

const providers = [
  { name: 'Google', icon: <GoogleIcon boxSize='5' />, id: 'google' },
  {
    name: 'GitHub',
    icon: <GitHubIcon boxSize='5' />,
    id: 'github',
  },
];

export const OAuthButtonGroup = () => {
  const handleSignIn = async (providerId: string) => {
    const result = await signIn(providerId, {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
    if (result?.error) {
      console.log(result.error);
    }
  };

  return (
    <ButtonGroup variant='outline' spacing='4' width='full'>
      {providers.map(({ name, icon, id }) => (
        <Button
          key={id}
          width='full'
          _hover={{ bg: 'gray.100', color: 'black' }}
          onClick={() => handleSignIn(id)}
        >
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
