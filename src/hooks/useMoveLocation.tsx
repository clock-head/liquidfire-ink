import { useState, useEffect } from 'react';
import type { location } from '../types/location';

export function useMoveLocation() {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [navOptions, setNavOptions] = useState<location[]>([]);

  const moveToLocation = (location: string) => {
    setCurrentLocation(location);
  };

  useEffect(() => {
    const getNavOptions = async () => {
      try {
        const locationOptions = await fetch('/api/locations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!locationOptions.ok) {
          throw new Error('Failed to fetch location options');
        }

        const data = await locationOptions.json();
        // Process the data as needed, e.g., set it in state or pass it to a callback
        setNavOptions(data);
      } catch (error) {
        console.error('Error fetching location options:', error);
      }
    };

    getNavOptions();
  }, [currentLocation]);

  return {
    currentLocation,
    navOptions,
    moveToLocation,
  };
}
