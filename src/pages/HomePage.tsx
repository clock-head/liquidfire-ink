import { useState } from 'react';
import ArtworkCarousel from '../components/gallery/ArtworkCarousel';
import { artworks } from '../data/artworks';

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="home-page">
      {!hasEntered ? (
        <section className="enter-screen">
          <button
            type="button"
            className="enter-screen__button"
            onClick={() => setHasEntered(true)}
          >
            Enter
          </button>
        </section>
      ) : (
        <section className="home-page__gallery">
          <button
            className="home-page__exit-button"
            onClick={() => setHasEntered(false)}
          >
            x
          </button>
          <ArtworkCarousel artworks={artworks} title="Exhibition" />
        </section>
      )}
    </main>
  );
}
