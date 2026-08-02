import HomePage from './pages/HomePage';
import { ArtPage } from './pages/ArtPage';
import DoctrinesPage from './pages/DoctrinesPage';
import ShopPage from './pages/ShopPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/doctrines/*" element={<DoctrinesPage />} />
      </Routes>
    </>
  );
}

export default App;
