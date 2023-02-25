import { SimpleGrid, Box, Heading, useColorModeValue } from '@chakra-ui/react';

interface DashboardCardProps {
  title: string;
}
const DashboardCard = ({
  title,
  children,
}: React.PropsWithChildren<DashboardCardProps>) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius='lg'
      boxShadow='lg'
      p='4'
      w='100%'
    >
      <Heading as='h3' size='md' mb='4'>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default DashboardCard;
