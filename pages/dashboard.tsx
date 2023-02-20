import { Box, Center, Spinner } from '@chakra-ui/react';

import { NextPage } from 'next';
import SidebarWithHeader from '@/components/Navbar';
import { useState } from 'react';
import useSwr from 'swr';

const DashboardPage: NextPage = () => {
  const { data, error } = useSwr(
    'https://api.spacexdata.com/v5/launches',
    (url) => fetch(url).then((res) => res.json())
  );

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
