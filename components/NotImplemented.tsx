import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const NotImplemented = () => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <Box display='inline-block'>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign='center'
        >
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as='h2' size='xl' mt={6} mb={2}>
        Not implemented yet
      </Heading>
      <Text color={'gray.500'}>
        This page is not implemented yet. Please check back later.
      </Text>
    </Box>
  );
};

export default NotImplemented;
