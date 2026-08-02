import type { art } from '../types/ArtifactTypes/art';

import artwork1 from '../assets/images/First_AI.png';
import artwork2 from '../assets/images/divine-hour.jpg';
import artwork3 from '../assets/images/birth.jpg';
import artwork4 from '../assets/images/tigerhex.jpg';
import artwork5 from '../assets/images/golden-stampede.jpg';
// import artwork6 from '../assets/images/artwork-6.jpg';
// import artwork7 from '../assets/images/artwork-7.jpg';
// import artwork8 from '../assets/images/artwork-8.jpg';

export const artworks: art[] = [
  {
    id: '1',
    slug: 'artemis-1',
    name: 'Artemis-01',
    year: '2024',
    medium: 'Digital',
    aspectRatio: '1:1',
    status: 'not for sale',
    image: artwork1,
    alt: 'Artemis-01 Turing Test',
    description:
      'Doctor Ishihara believes that a synthetic form of consciousness is possible. Refer to the Codex of Constructed Sentience',
  },
  {
    id: '2',
    slug: 'divine-hour',
    name: 'Divine Hour',
    year: '2024',
    medium: 'Digital',
    aspectRatio: '1:1',
    status: 'not for sale',
    image: artwork2,
    alt: 'divine hour',
    description: 'A time for all things.',
  },
  {
    id: '3',
    slug: 'birth',
    name: 'Birth',
    year: '2024',
    medium: 'Digital',
    aspectRatio: '1:1',
    status: 'not for sale',
    image: artwork3,
    alt: 'birth',
    description: '-.',
  },
  {
    id: '4',
    slug: 'tiger',
    name: 'TigerHex',
    year: '2024',
    medium: 'Digital',
    aspectRatio: '1:1',
    status: 'not for sale',
    image: artwork4,
    alt: 'tiger hex',
    description: '-.',
  },
  {
    id: '5',
    slug: 'golden-stampede',
    name: 'Golden Stampede',
    year: '2024',
    medium: 'Digital',
    aspectRatio: '1:1',
    status: 'not for sale',
    image: artwork5,
    alt: 'golden stampede',
    description: '-.',
  },
];
