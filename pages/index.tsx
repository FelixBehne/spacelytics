import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignIn = () => {
    signIn();
  };

  const routeToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      position='relative'
      overflow='hidden'
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        bgColor='rgba(0, 0, 0, 0.6)'
        overflow='hidden'
      />
      <video
        autoPlay
        loop
        muted
        poster='poster.png'
        playsInline
        controls={false}
        preload='auto'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src='globe.mp4' type='video/mp4' />
      </video>
      <Box
        py={{ base: '6', md: '8' }}
        px={{ base: '4', md: '8', lg: '12' }}
        borderRadius='md'
        textAlign='center'
        position='relative'
        zIndex='1'
        opacity={isVisible ? 1 : 0}
        transition='opacity 3s ease'
      >
        <Heading
          fontFamily='Times'
          color='white'
          fontSize={{ base: '5xl', md: '6xl' }}
          fontWeight='bold'
          mb={{ base: '2', md: '5' }}
          letterSpacing='widest'
        >
          Spacelytics
        </Heading>
        <Heading
          fontFamily='Times'
          color='white'
          fontSize={{ base: 'md', md: '2xl' }}
          fontWeight='normal'
          mb={{ base: '4', md: '7' }}
          letterSpacing='widest'
        >
          Explore the operational insights of SpaceX missions!
        </Heading>
        <Box
          position={{ base: 'fixed', md: 'static' }}
          bottom={{ base: '16', md: 'auto' }}
          width='100%'
        >
          <Button
            as='a'
            colorScheme='blackAlpha'
            border='1px solid white'
            borderRadius='md'
            fontFamily='Times'
            fontSize={{ base: 'xl', md: 'xl' }}
            fontWeight='light'
            mt={{ base: '4', md: '8' }}
            px={{ base: '10', md: '16' }}
            opacity={isVisible ? 1 : 0}
            transition='opacity 2s ease'
            onClick={session ? routeToDashboard : handleSignIn}
            cursor='pointer'
            _hover={{
              transform: 'scale(1.05)',
              transition: 'all 0.2s ease',
            }}
            color='white'
          >
            {session ? 'Explore' : 'Sign In'}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default IndexPage;
