import DashboardCard from '@/components/DashboardCard';
import {
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AiFillYoutube as YoutubeIcon } from 'react-icons/ai';
import { FaWikipediaW as WikipediaIcon } from 'react-icons/fa';
import { IoLogoReddit as RedditIcon } from 'react-icons/io5';

const UpcommingLaunch = () => {
  return (
    <DashboardCard title='Upcoming Launch'>
      <VStack spacing='1' w='100%' align='flex-start'>
        <Image
          src='/cape-canaveral.jpeg'
          alt='Cape Canaveral'
          width={500}
          height={300}
        />
        <Image
          src='/boca-chica.jpeg'
          alt='Boca Chica'
          width={500}
          height={300}
        />
      </VStack>
    </DashboardCard>
  );
};

export default UpcommingLaunch;
