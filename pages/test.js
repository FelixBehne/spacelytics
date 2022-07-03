import { useState, useRef, useEffect, useCallback } from 'react';
import BgVideo from './../components/BgVideo';
import FrontPageContent from './../components/FrontPageContent';

function Test() {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [canplay, setCanplay] = useState(false);

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  const handler2 = useCallback(
    (event) => {
      // Update coordinates
      setCanplay(true);
      console.log(event);
    },
    [setCanplay]
  );

  // Add event listener using our hook
  if (typeof window !== 'undefined') {
    const video = document.querySelector('video');

    useEventListener('canplay', handler2, video);
  }
  return (
    <BgVideo>
      <FrontPageContent
        heading={'Spacelytics'}
        subheading={'Explore the operational insights of SpaceX!'}
      />
    </BgVideo>
  );
}
export default Test;

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);
      // Add event listener
      element.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}
