import { CloseIcon } from '@chakra-ui/icons';
import { Center, Heading, useColorModeValue, VStack } from '@chakra-ui/react';

const ComingSoonCard = () => {
  return (
    <Center
      p='4'
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius='lg'
      boxShadow='lg'
      w='100%'
      h='100%'
      minH='200px'
      minW='200px'
    >
      <VStack>
        <Center boxSize='50px' bg='red' borderRadius='full'>
          <CloseIcon boxSize='20px' color='white' />
        </Center>
        <Heading as='h1' fontSize='2xl' fontWeight='bold'>
          Coming Soon
        </Heading>
      </VStack>
    </Center>
  );
};

export default ComingSoonCard;
