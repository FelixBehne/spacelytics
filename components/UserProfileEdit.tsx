import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

import { SmallCloseIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/react';

interface UserProfileEditProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileEdit = ({ isOpen, onClose }: UserProfileEditProps) => {
  const { data: session } = useSession();
  console.log(session);
  const toast = useToast();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', md: 'md' }}
      isCentered
      scrollBehavior='inside'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        maxW={'md'}
        my={12}
      >
        <ModalHeader lineHeight={1.1} fontSize={{ base: '2xl', sm: '2xl' }}>
          User Profile Edit
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl id='userName'>
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size='xl' src={session?.user?.image || ''}>
                  <AvatarBadge
                    as={IconButton}
                    size='sm'
                    rounded='full'
                    top='-10px'
                    colorScheme='red'
                    aria-label='remove Image'
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w='full'>
                <Button w='full'>Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id='userName' isRequired mt={{ base: 2, md: 4 }}>
            <FormLabel>User Name</FormLabel>
            <Input
              placeholder='UserName'
              _placeholder={{ color: 'gray.500' }}
              type='text'
            />
          </FormControl>
          <FormControl id='email' isRequired mt={{ base: 2, md: 4 }}>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder='your-email@example.com'
              _placeholder={{ color: 'gray.500' }}
              type='email'
            />
          </FormControl>
          <FormControl id='password' isRequired mt={{ base: 2, md: 4 }}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder='password'
              _placeholder={{ color: 'gray.500' }}
              type='password'
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Stack spacing={6} direction={['column', 'row']} w='full'>
            <Button
              bg={'red.400'}
              color={'white'}
              w='full'
              _hover={{
                bg: 'red.500',
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w='full'
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => {
                session?.user?.image == null
                  ? toast({
                      title: 'User Profile Updated',
                      isClosable: true,
                      status: 'success',
                    })
                  : toast({
                      title: 'Only supported for Spacelytics Accounts',
                      isClosable: true,
                      status: 'error',
                    });
                onClose();
              }}
            >
              Submit
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserProfileEdit;
