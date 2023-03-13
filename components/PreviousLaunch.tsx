import DashboardCard from '@/components/DashboardCard';
import {
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  createIcon,
  Box,
  Spacer,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AiFillYoutube as YoutubeIcon } from 'react-icons/ai';
import { FaWikipediaW as WikipediaIcon } from 'react-icons/fa';
import { IoLogoReddit as RedditIcon } from 'react-icons/io5';

const CrewMember = createIcon({
  displayName: 'CrewMember',
  viewBox: '0 0 60.671 60.671',
  path: (
    <>
      <ellipse
        cx='30.336'
        cy='12.097'
        rx='11.997'
        ry='12.097'
        fill='currentColor'
      />
      <path
        fill='currentColor'
        d='M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9C48.354,35.818,42.661,30.079,35.64,30.079z'
      />
    </>
  ),
});

const UpcommingLaunch = () => {
  return (
    <DashboardCard title='Previous Launch'>
      <SimpleGrid columns={2} spacing='4' w='100%' m='0'>
        <VStack spacing='1' w='100%' align='flex-start'>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              MISSION NAME
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Crew-5
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              ROCKET NAME
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Falcon 9
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              FLIGHT NUMBER
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              187
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              TIME (UTC)
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Oct 05, 04:00 PM
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              LINKS
            </Text>
            <HStack spacing='2'>
              <IconButton
                aria-label='Wikipedia'
                icon={<WikipediaIcon size='15' />}
                m='0'
                rounded='full'
                bg={useColorModeValue('gray.300', 'gray.700')}
                size='xs'
                _hover={{}}
              />
              <IconButton
                aria-label='Youtube'
                icon={<YoutubeIcon size='15' />}
                m='0'
                rounded='full'
                bg={useColorModeValue('gray.300', 'gray.700')}
                size='xs'
                _hover={{}}
              />
              <IconButton
                aria-label='Reddit'
                icon={<RedditIcon size='15' />}
                m='0'
                rounded='full'
                bg={useColorModeValue('gray.300', 'gray.700')}
                size='xs'
                _hover={{}}
              />
            </HStack>
          </VStack>
        </VStack>
        {/* Righ side */}
        <VStack spacing='1' w='100%' align='flex-start'>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              MISSION PATCH
            </Text>
            <Box
              bg={useColorModeValue('gray.300', 'gray.700')}
              rounded='md'
              p='5'
            >
              <Image
                src='/mission-patch.png'
                alt='mission patch'
                width={80}
                height={94.4}
              />
            </Box>
          </VStack>

          <VStack spacing='1' w='100%' align='flex-start' pt='4'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              CREW
            </Text>
            <HStack spacing='1'>
              <CrewMember boxSize='5' />
              <CrewMember boxSize='5' />
              <CrewMember boxSize='5' />
              <CrewMember boxSize='5' />
            </HStack>
          </VStack>
        </VStack>
      </SimpleGrid>
    </DashboardCard>
  );
};

export default UpcommingLaunch;
