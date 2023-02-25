import { Box, Center } from '@chakra-ui/react';

import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import AnalyticsLayout from '@/components/AnalyticsLayout';
import NotImplemented from '@/components/NotImplemented';

const AboutPage: NextPageWithLayout = () => {
  return (
    <Box p='4'>
      <Center h='70vh'>
        <NotImplemented />
      </Center>
    </Box>
  );
};

AboutPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default AboutPage;
