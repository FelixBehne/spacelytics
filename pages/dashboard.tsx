import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import UserMenu from '@/components/UserMenu';

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} variant='ghost'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <UserMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
