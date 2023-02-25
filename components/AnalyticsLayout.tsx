import { Box } from '@chakra-ui/react';
import SidebarWithHeader from './Navbar';

interface AnalyticsLayoutProps {
  children: React.ReactNode;
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return <SidebarWithHeader>{children}</SidebarWithHeader>;
};

export default AnalyticsLayout;
