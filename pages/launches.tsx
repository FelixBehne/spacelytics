import { Box, Center } from '@chakra-ui/react';

import AnalyticsLayout from '@/components/AnalyticsLayout';
import NotImplemented from '@/components/NotImplemented';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const LaunchesPage: NextPageWithLayout = () => {
  return (
    <Box p='4'>
      <Center h='70vh'>
        <NotImplemented />
      </Center>
    </Box>
  );
};

LaunchesPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default LaunchesPage;
