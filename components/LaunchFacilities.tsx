import DashboardCard from '@/components/DashboardCard';
import { Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react';

const LaunchFacilities = () => {
  return (
    <DashboardCard title='Launch facilities'>
      <VStack spacing='4' w='100%' align='flex-start'>
        <VStack
          spacing='2'
          w='100%'
          h='130px'
          backgroundImage={`url('/cape-canaveral.jpeg')`}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          borderRadius='lg'
          align='flex-start'
          position='relative'
        >
          <VStack
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            bg='rgba(0, 0, 0, 0.3)' // set the background color to a semi-transparent value
            borderRadius='lg'
            p='4'
            align='flex-start'
          >
            <Flex align='center' w='100%' h='100%'>
              <VStack align='flex-start' spacing='0' w='200px'>
                <Heading
                  as='h2'
                  color='white'
                  fontSize={{ base: '16px', md: '18px' }}
                >
                  Cape Canaveral
                </Heading>
                <Text
                  fontSize={{ base: '12px', md: '13px' }}
                  fontWeight='thin'
                  letterSpacing='wide'
                  color='white'
                >
                  LC-39A & SLC-40
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '12px' }}
                  fontWeight='normal'
                  color='gray.100'
                >
                  REGION
                </Text>
                <Heading
                  as='h2'
                  color='white'
                  fontSize={{ base: '14px', md: '16px' }}
                >
                  FLORIDA
                </Heading>
              </VStack>
            </Flex>
            <Flex align='center' w='100%' h='100%'>
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Temp
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  letterSpacing='wide'
                  color='white'
                >
                  31°C
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Weather
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  color='white'
                >
                  Clouds
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Wind
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  color='white'
                >
                  4 m/s
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
        <VStack
          spacing='2'
          w='100%'
          h='130px'
          backgroundImage={`url('/boca-chica.jpeg')`}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          borderRadius='lg'
          align='flex-start'
          position='relative'
        >
          <VStack
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            bg='rgba(0, 0, 0, 0.3)' // set the background color to a semi-transparent value
            borderRadius='lg'
            p='4'
            align='flex-start'
          >
            <Flex align='center' w='100%' h='100%'>
              <VStack align='flex-start' spacing='0' w='200px'>
                <Heading
                  as='h2'
                  fontSize={{ base: '16px', md: '18px' }}
                  color='white'
                >
                  Starbase Boca Chica
                </Heading>
                <Text
                  fontSize={{ base: '12px', md: '13px' }}
                  fontWeight='thin'
                  letterSpacing='wide'
                  color='white'
                >
                  Starship Launch Facility
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontWeight='normal'
                  color='gray.100'
                  fontSize={{ base: '11px', md: '12px' }}
                >
                  REGION
                </Text>
                <Heading
                  as='h2'
                  fontSize={{ base: '14px', md: '16px' }}
                  color='white'
                >
                  FLORIDA
                </Heading>
              </VStack>
            </Flex>
            <Flex align='center' w='100%' h='100%'>
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Temp
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  letterSpacing='wide'
                  color='white'
                >
                  23°C
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Weather
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  color='white'
                >
                  Clouds
                </Text>
              </VStack>
              <Spacer />
              <VStack align='flex-start' spacing='0'>
                <Text
                  fontSize={{ base: '11px', md: '13px' }}
                  fontWeight='normal'
                  color='gray.200'
                  pt='4'
                  textTransform='uppercase'
                >
                  Wind
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight='bold'
                  color='white'
                >
                  8 m/s
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    </DashboardCard>
  );
};

export default LaunchFacilities;
