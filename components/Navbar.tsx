('use client');
import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FiChevronDown, FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import React, { ReactNode } from 'react';
import { signOut, useSession } from 'next-auth/react';

import { IconType } from 'react-icons';
import SettingsPanel from './SettingsPanel';
import UserProfileEdit from './UserProfileEdit';
import {
  AiOutlineInfoCircle as AboutIcon,
  AiOutlineDashboard as DashboardIcon,
} from 'react-icons/ai';
import {
  RiHistoryLine as HistoryIcon,
  RiRocket2Line as RocketIcon,
  RiSpaceShipLine as StarlinkIcon,
} from 'react-icons/ri';
import { BsLightning as LaunchesIcon } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Starlink', icon: StarlinkIcon },
  { name: 'Rockets', icon: RocketIcon },

  { name: 'Launches', icon: LaunchesIcon },
  { name: 'History', icon: HistoryIcon },
  { name: 'About', icon: AboutIcon },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showUserProfileEdit, setShowUserProfileEdit] = React.useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = React.useState(false);
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} minH='100vh'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav
        onOpen={onOpen}
        onProfileEdit={() => setShowUserProfileEdit(true)}
        onSettingsPanel={() => setShowSettingsPanel(true)}
      />
      {showUserProfileEdit && (
        <UserProfileEdit
          onClose={() => setShowUserProfileEdit(false)}
          isOpen={showUserProfileEdit}
        />
      )}
      {showSettingsPanel && (
        <SettingsPanel
          onClose={() => setShowSettingsPanel(false)}
          isOpen={showSettingsPanel}
        />
      )}
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      as='nav'
      bg={useColorModeValue('white', 'gray.800')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Spacelytics
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Flex pos='absolute' bottom='0' left='0' w='full' align='center' p='8'>
        <HStack spacing='1'>
          <Text fontSize='16px' fontFamily='Helvetica Neue' fontWeight='normal'>
            Made by
          </Text>
          <ChakraLink
            href='https://github.com/FelixBehne'
            isExternal
            fontWeight='bold'
          >
            Felix Behne
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === `/${children.toLowerCase()}`;
  return (
    <ChakraLink
      as={Link}
      href={`/${children.toLowerCase()}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        fontFamily='Helvetica Neue'
        fontWeight={isActive ? 'semibold' : 'normal'}
        color={isActive ? useColorModeValue('black', 'white') : 'gray.600'}
        fontSize={isActive ? 'md' : 'sm'}
        _hover={{
          fontWeight: 'semibold',
          fontSize: 'md',
          color: useColorModeValue('black', 'white'),
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize={isActive ? '18' : '16'}
            color={
              isActive
                ? useColorModeValue('black', 'white')
                : useColorModeValue('gray.600', 'gray.400')
            }
            _groupHover={{
              fontSize: '18',
              color: useColorModeValue('black', 'white'),
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraLink>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  onProfileEdit: () => void;
  onSettingsPanel: () => void;
}
const MobileNav = ({
  onOpen,
  onProfileEdit,
  onSettingsPanel,
  ...rest
}: MobileProps) => {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'
      >
        Spacelytics
      </Text>

      <HStack spacing={{ base: '2', md: '6' }}>
        {colorMode === 'light' ? (
          <IconButton
            aria-label='Toggle Dark Mode'
            icon={<FiMoon />}
            onClick={toggleColorMode}
            variant='outline'
            display={{ base: 'none', md: 'flex' }}
          />
        ) : (
          <IconButton
            aria-label='Toggle Light Mode'
            icon={<FiSun />}
            onClick={toggleColorMode}
            variant={{ base: 'ghost', md: 'outline' }}
            display={{ base: 'none', md: 'flex' }}
          />
        )}
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'sm'} src={session?.user?.image || ''} mr='2' />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm'>
                    {session?.user?.name || 'Felix Behne'}
                  </Text>
                  <Text fontSize='xs' color='gray.600'>
                    {session?.user?.name == 'Felix Behne' || 'Admin'
                      ? 'Admin'
                      : 'User'}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => onProfileEdit()}>Profile</MenuItem>
              <MenuItem onClick={() => onSettingsPanel()}>Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
