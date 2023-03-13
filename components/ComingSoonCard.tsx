import { CloseIcon } from '@chakra-ui/icons';
import { Center, Heading, useColorModeValue, VStack } from '@chakra-ui/react';

const ComingSoonCard = () => {
  return (
    <Center
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius='lg'
      boxShadow='lg'
      p='4'
      w='calc(100% - 4rem)'
      h='300px'
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
