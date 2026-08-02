import Layout from '../components/Modular/Layout';
import Section from '../components/Modular/Section';
import Carousel from '../components/UI/Carousel/Carousel';
import { artworks } from '../data/artworks';

export function ArtPage() {
  const context = {};

  return (
    <Layout
      layout="grid"
      justifyContent="center"
      justifyItems="center"
      context={context}
      background="dark"
      minHeight="100vh"
    >
      <Section layout="grid" justifyContent="center">
        <Carousel content={artworks} />
      </Section>
    </Layout>
  );
}
