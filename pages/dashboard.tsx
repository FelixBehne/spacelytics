import AnalyticsLayout from '@/components/AnalyticsLayout';
import ComingSoonCard from '@/components/ComingSoonCard';
import { SimpleGrid, Center } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import UpcommingLaunch from '@/components/UpcommingLaunch';
import LaunchFacilities from '@/components/LaunchFacilities';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Center w='86vw'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4' h='80vh' w='100%'>
          <UpcommingLaunch />
          <LaunchFacilities />
          <ComingSoonCard />
          <ComingSoonCard />
        </SimpleGrid>
      </Center>
    </>
  );
};

DashboardPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default DashboardPage;
