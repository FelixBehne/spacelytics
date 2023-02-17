import {
  Avatar,
  Button,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/react';

const UserMenu = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return null;
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded='full'
        variant='link'
        cursor='pointer'
        minW={0}
        size='sm'
      >
        <Avatar size='sm' src={session?.user?.image || ''} />
      </MenuButton>
      <MenuList alignItems='center' fontSize='sm' p={2}>
        <MenuItem isDisabled>
          <HStack justifyContent='flex-start' w='full' spacing={4}>
            <VStack justifyContent='flex-start' align='flex-start'>
              <Heading
                fontWeight='normal'
                fontSize='sm'
                color='gray.400'
                pl={0}
              >
                Signed in as
              </Heading>
              <Heading fontWeight='bold' fontSize='md'>
                {session?.user?.name || 'Admin'}
              </Heading>
            </VStack>
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<FiSettings />}
          onClick={() => console.log('settings')}
          fontSize='sm'
        >
          Settings
        </MenuItem>
        <MenuItem icon={<FiLogOut />} onClick={() => signOut()} fontSize='sm'>
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
