import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>

      <Link to="/art">Return to the gallery</Link>
    </main>
  );
}
