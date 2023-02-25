import { Box, Center } from '@chakra-ui/react';

import AnalyticsLayout from '@/components/AnalyticsLayout';
import NotImplemented from '@/components/NotImplemented';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const RocketsPage: NextPageWithLayout = () => {
  return (
    <Box p='4'>
      <Center h='70vh'>
        <NotImplemented />
      </Center>
    </Box>
  );
};

RocketsPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default RocketsPage;
