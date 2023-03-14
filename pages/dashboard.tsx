import AnalyticsLayout from '@/components/AnalyticsLayout';
import ComingSoonCard from '@/components/ComingSoonCard';
import { SimpleGrid, Center } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import UpcommingLaunch from '@/components/UpcommingLaunch';
import LaunchFacilities from '@/components/LaunchFacilities';
import PreviousLaunch from '@/components/PreviousLaunch';
import Starlink from '@/components/Starlink';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Center w={['100%', '100%', '86vw']}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={['4', '4', '6']}
          h={['auto', 'auto', '80vh']}
          w={['100%', '100%', '100%', '90%']}
        >
          <UpcommingLaunch />
          <LaunchFacilities />
          <PreviousLaunch />
          <Starlink />
        </SimpleGrid>
      </Center>
    </>
  );
};

DashboardPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default DashboardPage;
