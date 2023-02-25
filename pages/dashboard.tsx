import AnalyticsLayout from '@/components/AnalyticsLayout';
import ComingSoonCard from '@/components/ComingSoonCard';
import { SimpleGrid } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import UpcommingLaunch from '@/components/UpcommingLaunch';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4' h='80vh'>
        <UpcommingLaunch />
        <ComingSoonCard />
        <ComingSoonCard />
        <ComingSoonCard />
      </SimpleGrid>
    </>
  );
};

DashboardPage.getLayout = (page: ReactElement) => (
  <AnalyticsLayout>{page}</AnalyticsLayout>
);

export default DashboardPage;
