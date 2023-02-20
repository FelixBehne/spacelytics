import { Box, useColorModeValue } from '@chakra-ui/react';
import { CSSProperties, memo } from 'react';

interface StarSkyProps {
  numStars?: number;
}

const StarSky = memo(function StarSky({ numStars = 100 }: StarSkyProps) {
  const stars: JSX.Element[] = [];

  for (let i: number = 0; i < numStars; i++) {
    const size: number = Math.floor(Math.random() * 2) + 1; // Random size between 2 and 3
    const left: number = Math.random() * 100; // Random horizontal position between 0% and 100%
    const top: number = Math.random() * 100; // Random vertical position between 0% and 100%
    const delay: number = Math.random() * 3; // Random delay between 0 and 3 seconds

    const starStyle: CSSProperties = {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: 'white',
      borderRadius: '50%',
      left: `${left}%`,
      top: `${top}%`,
      animation: `twinkle 2s ease-in-out ${delay}s infinite alternate`,
      opacity: 0, // initially invisible
    };

    const star: JSX.Element = <Box key={i} style={starStyle} />;

    stars.push(star);
  }

  const skyStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: useColorModeValue('white', 'black'),
    overflow: 'hidden',
    zIndex: '-1',
    pointerEvents: 'none',
  };

  return (
    <Box style={skyStyle}>
      {stars}
      <style>
        {`
          @keyframes twinkle {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
});

StarSky.displayName = 'StarSky';

export default StarSky;
