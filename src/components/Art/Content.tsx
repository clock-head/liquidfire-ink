import type { artwork } from '../../types/ArtifactTypes/artifact';
import './Content.css';

export default function Content({
  currentArtwork,
}: {
  currentArtwork: artwork;
}) {
  return (
    <div className="content">
      <div className="meta">
        <h3>{currentArtwork.title}</h3>
        <p className="story">{currentArtwork.description}</p>
      </div>
    </div>
  );
}
