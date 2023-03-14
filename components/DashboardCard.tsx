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
      p={{ base: '3', md: '4' }}
      w={{ base: '100%', md: 'calc(100% - 4rem)' }}
      h={{ base: 'auto', md: 'calc(100vh / 2 - 5rem)' }}
      maxW='550px'
      mb={{ base: '6', md: '0' }}
      mr={{ base: '0', md: '6' }}
    >
      <Heading as='h3' size='md' mb={{ base: '2', md: '3' }}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default DashboardCard;
