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

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const { data: session } = useSession();
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
          Settings
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center
              w='full'
              h='full'
              rounded='xl'
              p={6}
              m={2}
              fontSize='lg'
              fontFamily='body'
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              User Settings not yet implemented!
            </Center>
          </Stack>
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
              isDisabled
            >
              Submit
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsPanel;
