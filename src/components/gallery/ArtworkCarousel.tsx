import { useMemo, useState } from 'react';
import type { artwork } from '../../types/artwork';

type ArtworkCarouselProps = {
  artworks: artwork[];
  title?: string;
};

export default function ArtworkCarousel({
  artworks,
  title = 'Exhibition',
}: ArtworkCarouselProps) {
  const safeArtworks = useMemo(() => artworks ?? [], [artworks]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedArtworkId, setExpandedArtworkId] = useState<string | null>(
    null,
  );

  const toggleExpanded = (id: string) => {
    setExpandedArtworkId(expandedArtworkId === id ? null : id);
  };

  if (safeArtworks.length === 0) {
    return (
      <section className="artwork-carousel">
        <div className="artwork-carousel__empty">
          <p>No artworks available yet.</p>
        </div>
      </section>
    );
  }

  const currentArtwork = safeArtworks[currentIndex];
  const isExpanded = expandedArtworkId === currentArtwork.id;

  const goToPrevious = () => {
    setExpandedArtworkId(null);
    setCurrentIndex((prev) =>
      prev === 0 ? safeArtworks.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setExpandedArtworkId(null);
    setCurrentIndex((prev) =>
      prev === safeArtworks.length - 1 ? 0 : prev + 1,
    );
  };

  const goToSlide = (index: number) => {
    setExpandedArtworkId(null);
    setCurrentIndex(index);
  };

  return (
    <section className="artwork-carousel" aria-label={title}>
      <div className="artwork-carousel__header">
        <h2>{title}</h2>
      </div>

      <div className="artwork-carousel__frame">
        <button
          type="button"
          className="artwork-carousel__control"
          onClick={goToPrevious}
          aria-label="View previous artwork"
        >
          ←
        </button>
        <article className="artwork-carousel__slide">
          <button
            type="button"
            className="artwork-carousel__image-button"
            onClick={() => toggleExpanded(currentArtwork.id)}
            aria-expanded={isExpanded}
          >
            <img
              src={currentArtwork.image}
              alt={currentArtwork.alt}
              className="artwork-carousel__image"
            />
          </button>

          <div className="artwork-carousel__content">
            <div className="artwork-carousel__meta">
              <h3>{currentArtwork.title}</h3>
              <p className="artwork-carousel__description">
                {currentArtwork.description}
              </p>
            </div>
          </div>
        </article>

        <button
          type="button"
          className="artwork-carousel__control"
          onClick={goToNext}
          aria-label="View next artwork"
        >
          →
        </button>
      </div>

      <div
        className="artwork-carousel__dots"
        role="tablist"
        aria-label="Arwork slides"
      >
        {safeArtworks.map((artwork, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={artwork.id}
              type="button"
              className={`artwork-carousel__dot ${isActive ? 'artwork-carousel__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`View artwork ${index + 1}`}
              role="tab"
              aria-selected={isActive}
            ></button>
          );
        })}
      </div>
    </section>
  );
}
