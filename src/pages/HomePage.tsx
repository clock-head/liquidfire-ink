import { useState } from 'react';
import ArtworkCarousel from '../components/gallery/ArtworkCarousel';
import { artworks } from '../data/artwork';

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
          ></button>
        </section>
      ) : (
        <section className="home-page__gallery">
          <ArtworkCarousel artworks={artworks} title="Exhibition" />
        </section>
      )}
    </main>
  );
}
