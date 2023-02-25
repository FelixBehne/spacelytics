import DashboardCard from '@/components/DashboardCard';
import {
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { AiFillYoutube as YoutubeIcon } from 'react-icons/ai';
import { FaWikipediaW as WikipediaIcon } from 'react-icons/fa';
import { IoLogoReddit as RedditIcon } from 'react-icons/io5';

const Falcon9 = createIcon({
  displayName: 'Falcon9',
  viewBox: '0 0 64.917 45.619',
  path: [
    <path
      fill='#eb1747'
      d='M54.296 29.82a3.876 3.876 0 0 1-.072-.397c-.121-.869-.829-1.74-1.804-2.218-1.029-.506-2.29-.743-5.435-1.02-.685-.06-1.267-.13-1.293-.157-.084-.084.385-.509.899-.814.272-.163.495-.319.496-.347 0-.03-.22-.068-.49-.086-.342-.023-.83-.16-1.595-.448-.606-.229-1.31-.458-1.562-.51l-.46-.094.283-.216c.155-.119.283-.246.283-.283 0-.096-.914-.24-1.502-.237-.278.002-.771.05-1.096.109-.325.057-.601.095-.614.084-.054-.046 1.192-.52 1.69-.642.314-.077.865-.132 1.325-.134.85-.002 1.21.079 2.432.55.386.148.722.248.748.222.094-.093-.368-.788-.686-1.032-.528-.406-.945-.46-3.557-.456-4.446.006-9.036.631-11.848 1.614-.58.203-.778.238-1.095.197-1.488-.197-4.732-1.83-8.824-4.446-2.1-1.343-7.643-5.158-8.03-5.527-.043-.042.382.142.945.408 6.543 3.093 13.984 5.207 21.728 6.172 2.813.351 5.311.532 9.191.667 1.588.055 1.985.092 2.145.196.272.179.95 1.016 1.736 2.142l.665.953.5.052c1.655.17 3.575 1.056 4.602 2.125.667.696.915 1.24.916 2.018 0 .5-.038.671-.25 1.121-.252.537-.316.612-.371.433zm-32.72-3.762c-2.16-1.29-5.375-3.944-8.144-6.725C8.711 14.591 5.006 9.326 2.89 4.35 2.4 3.197 1.962 2.04 2.003 2c.014-.014.148.263.297.616C2.88 4 4.292 6.33 5.603 8.072c1.52 2.021 3.793 4.474 5.863 6.328 3.97 3.555 8.71 6.754 13.858 9.352.842.425 1.53.79 1.53.813 0 .049-4.414 1.89-4.53 1.89-.046 0-.382-.18-.747-.397z'
    />,
    <path
      fill='#f5f5f5'
      d='M22.527 37.24v-6.378l6.671.003 6.672.003-.453.428c-.725.684-.608.669-5.347.669h-4.08v3.306h3.543c2.302 0 3.543.028 3.543.079 0 .156-.57.703-.896.861-.32.155-.468.162-3.262.162H25.99v4.38l-.298.494c-.73 1.207-1.79 2.04-2.949 2.32l-.216.052zm27.085 6.099c-.868-.379-1.659-1.022-2.263-1.843l-.601-.817v-9.76h3.399v6.323c0 3.477-.015 6.317-.034 6.311a23.912 23.912 0 0 1-.5-.214zm-12.518-6.981v-5.575h3.263v4.487h2.38c1.309 0 2.38.046 2.38.102 0 .056-.23.286-.51.51-.504.403-.536.409-2.38.452l-1.87.045v5.554h-3.263z'
    />,
  ],
});

const UpcommingLaunch = () => {
  return (
    <DashboardCard title='Upcoming Launch'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4' w='100%'>
        <VStack spacing='1' w='100%' align='flex-start'>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              MISSION NAME
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              USSF-44
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              ROCKET NAME
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Falcon Heavy
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              FLIGHT NUMBER
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              188
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              TIME (UTC)
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Nov 01, 01:41 PM
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
              ROCKET LOGO
            </Text>
            <Falcon9
              color={useColorModeValue('gray.600', 'gray.400')}
              boxSize={{ base: '70px', md: '80px' }}
              bg={useColorModeValue('gray.100', 'gray.700')}
              rounded='md'
            />
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' opacity={0}>
              FLIGHT NUMBER
            </Text>
            <Text fontSize='lg' fontWeight='bold' opacity={0}>
              188
            </Text>
          </VStack>
          <VStack spacing='1' w='100%' align='flex-start'>
            <Text fontSize='sm' fontWeight='light' color='gray.600'>
              LAUNCH PAD
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              KSC LC 39A
            </Text>
          </VStack>
        </VStack>
      </SimpleGrid>
    </DashboardCard>
  );
};

export default UpcommingLaunch;
