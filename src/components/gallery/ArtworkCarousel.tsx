import { useMemo, useState, useEffect } from 'react';
import { getDimensionsFromAspectRatio } from '../../utils/dimensionUtils';
import type { artwork } from '../../types/artwork';
import Content from './Content';
import './ArtworkCarousel.css';

type ArtworkCarouselProps = {
  artworks: artwork[];
  title?: string;
};

export default function ArtworkCarousel({
  artworks,
  title = 'Liquidfire',
}: ArtworkCarouselProps) {
  const safeArtworks = useMemo(() => artworks ?? [], [artworks]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedArtworkId, setExpandedArtworkId] = useState<string | null>(
    null,
  );
  const [currentArtworkDimensions, setCurrentArtworkDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  const [scaleFactor, setScaleFactor] = useState(400);

  useEffect(() => {
    const dimensions = getDimensionsFromAspectRatio(
      safeArtworks[currentIndex].aspectRatio ?? '1:1',
    );

    const setDimensions = () => {
      setCurrentArtworkDimensions({
        height: dimensions.height,
        width: dimensions.width,
      });
    };

    setDimensions();
  }, [currentIndex]);

  const toggleExpanded = (id: string) => {
    setExpandedArtworkId(expandedArtworkId === id ? null : id);
    setScaleFactor(expandedArtworkId === id ? 400 : 700);
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

    if (currentArtwork.aspectRatio) {
      const dimensions = getDimensionsFromAspectRatio(
        currentArtwork.aspectRatio,
      );
      setCurrentArtworkDimensions(dimensions);
    }
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
          <div>
            <button
              type="button"
              className="artwork-carousel__image-button"
              onClick={() => toggleExpanded(currentArtwork.id)}
              aria-expanded={isExpanded}
            >
              <img
                src={currentArtwork.image}
                alt={currentArtwork.alt}
                height={
                  currentArtworkDimensions?.height
                    ? currentArtworkDimensions.height * scaleFactor
                    : undefined
                }
                width={
                  currentArtworkDimensions?.width
                    ? currentArtworkDimensions.width * scaleFactor
                    : undefined
                }
                className="artwork-carousel__image"
              />
            </button>
          </div>

          {expandedArtworkId === currentArtwork.id && (
            <Content currentArtwork={currentArtwork} />
          )}
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
