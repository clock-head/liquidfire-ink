import Layout from '../components/Modular/Layout';
import Section from '../components/Modular/Section';
import NavBar from '../components/Navigation/NavBar';
import Button from '../components/UI/Button/Button';
import { useEnteredState } from '../hooks/useEnteredState';

export default function HomePage() {
  const { isEntered, setIsEntered } = useEnteredState(false);

  const context = {};

  return (
    <Layout
      context={context}
      background="dark"
      layout="grid"
      justifyContent="center"
      justifyItems="center"
      minHeight="100vh"
    >
      {!isEntered ? (
        <Section
          layout="grid"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="button"
            width="4"
            onClick={() => setIsEntered(true)}
            variant="outline"
          >
            Enter
          </Button>
        </Section>
      ) : (
        <Section alignContent="center" justifyContent="center" height="100vh">
          <NavBar handleExit={() => setIsEntered(false)} />
        </Section>
      )}
    </Layout>
  );
}
