import type { artwork } from '../types/artwork';

import artwork1 from '../assets/images/artwork-1.jpg';
// import artwork2 from '../assets/images/artwork-2.jpg';
// import artwork3 from '../assets/images/artwork-3.jpg';
// import artwork4 from '../assets/images/artwork-4.jpg';
// import artwork5 from '../assets/images/artwork-5.jpg';
// import artwork6 from '../assets/images/artwork-6.jpg';
// import artwork7 from '../assets/images/artwork-7.jpg';
// import artwork8 from '../assets/images/artwork-8.jpg';

export const artworks: artwork[] = [
  {
    id: '1',
    slug: 'artemis-1',
    title: 'Artemis-01',
    year: '2024',
    medium: 'Digital',
    dimensions: '1920 x 1920 px',
    status: 'not for sale',
    image: artwork1,
    alt: 'Artemis-01 Turing Test',
    description:
      'Doctor Ishihara believes that the human pineal gland can be artificially recontructed to create a synthetic form of consciousness.',
  },
];
