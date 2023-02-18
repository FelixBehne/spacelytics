import { Box, Center, Spinner, useColorMode } from '@chakra-ui/react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import SidebarWithHeader from '@/components/Navbar';
import useSwr from 'swr';

const DashboardPage: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data, error } = useSwr(
    'https://api.spacexdata.com/v5/launches',
    (url) => fetch(url).then((res) => res.json())
  );
  console.log(data);

  return (
    <Box style={{ height: '100vh', overflow: 'hidden' }}>
      <SidebarWithHeader>
        <Box p='4'>
          {data ? (
            <Center h='80vh'>To be implemented</Center>
          ) : (
            <Center h='80vh'>
              <Spinner size={{ base: 'md', md: 'lg' }} />
            </Center>
          )}
        </Box>
      </SidebarWithHeader>
    </Box>
  );
};

export default DashboardPage;
