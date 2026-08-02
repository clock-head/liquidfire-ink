import { useMemo } from 'react';
import Carousel from '../UI/Carousel/Carousel';
import type { CarouselContent } from '../UI/Carousel/Carousel';
import type { artifact } from '../../types/ArtifactTypes/artifact';
import './ArtifactCarousel.css';

type ArtifactCarouselProps = {
  artworks: artifact[];
  title?: string;
};

export default function ArtifactCarousel({
  artworks,
  title = 'Liquidfire',
}: ArtifactCarouselProps) {
  const carouselContent = useMemo<CarouselContent[]>(
    () =>
      artworks.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        alt: item.alt,
        description: item.description,
      })),
    [artworks],
  );

  if (carouselContent.length === 0) {
    return (
      <section className="artwork-carousel">
        <div className="artwork-carousel__empty">
          <p>No artworks available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="artwork-carousel" aria-label={title}>
      <div className="artwork-carousel__header">
        <h2>{title}</h2>
      </div>

      <Carousel content={carouselContent} scaleDirection="toward-center" />
    </section>
  );
}
