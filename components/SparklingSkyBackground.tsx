import { Box } from '@chakra-ui/react';

const SparklingSkyBackground = () => {
  return (
    <Box
      w='100%'
      h='100vh'
      backgroundImage={`linear-gradient(to bottom, #91c1ff, #c0d8f8, #e1eef5, #f2f8fc, #ffffff), linear-gradient(to bottom, transparent 70%, rgba(255, 255, 255, 0.1) 70%)`}
      backgroundSize='cover'
      position='relative'
      overflow='hidden'
    >
      <Box
        w='100%'
        h='100%'
        position='absolute'
        top='0'
        left='0'
        backgroundImage={`linear-gradient(to bottom, #91c1ff, #c0d8f8, #e1eef5, #f2f8fc, #ffffff), linear-gradient(to bottom, transparent 70%, rgba(255, 255, 255, 0.1) 70%)`}
        backgroundRepeat='repeat'
        zIndex='-1'
      />
      <Box
        w='100%'
        h='100%'
        position='absolute'
        top='0'
        left='0'
        backgroundSize='1000px 100%'
        backgroundImage={`linear-gradient(to right, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.3) 50%, transparent 55%, transparent 100%), linear-gradient(to right, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.2) 50%, transparent 55%, transparent 100%)`}
        animation='sparkle 60s linear infinite'
        zIndex='-1'
        sx={{
          '@keyframes sparkle': {
            from: { backgroundPosition: '0 0' },
            to: { backgroundPosition: '-1000px 0' },
          },
        }}
      />
    </Box>
  );
};

export default SparklingSkyBackground;
