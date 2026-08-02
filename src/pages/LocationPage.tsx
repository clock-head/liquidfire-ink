import React from 'react';
import NavCarousel from '../components/Navigation/NavCarousel';
import { Location } from '../components/Navigation/Location';
import { useMoveLocation } from '../hooks/useMoveLocation';

export default function LocationPage() {
  const { navOptions } = useMoveLocation();

  return <Location>{<NavCarousel locations={navOptions} />}</Location>;
}
