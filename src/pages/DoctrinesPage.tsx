import Layout from '../components/Modular/Layout';
import BookList from '../components/Book/BookList';
import Section from '../components/Modular/Section';
import DoctrineList from '../components/Book/DoctrineList';
import CodexMaterial from '../components/Book/CodexMaterial';
import { books, codexes } from '../components/Book/_data/content';
import { useParams } from '../hooks/useParams';

const DoctrinesPage = () => {
  const context = {};
  const { bookSlug, codexSlug } = useParams();
  const selectedBook = books.find((book) => book.slug === bookSlug);
  const selectedCodex = codexes.find((codex) => codex.slug === codexSlug);

  return (
    <Layout
      layout="grid"
      gridTemplate=""
      background="dark"
      context={context}
      justifyContent="center"
      justifyItems="center"
    >
      <Section
        layout="grid"
        justifyContent="center"
        alignItems="center"
        gap="md"
      >
        {selectedCodex ? (
          <CodexMaterial
            codexId={selectedCodex.id}
            title={selectedCodex.title}
            definition={selectedCodex.definition}
            governingPrinciple={selectedCodex.governingPrinciple}
            transformationFunction={selectedCodex.transformationFunction}
            diagnosticQuestions={selectedCodex.diagnosticQuestions}
            failureModes={selectedCodex.failureModes}
            laws={selectedCodex.laws}
            operationalOutputs={selectedCodex.operationalOutputs}
          />
        ) : selectedBook ? (
          <DoctrineList bookId={selectedBook.id} />
        ) : (
          <BookList />
        )}
      </Section>
    </Layout>
  );
};

export default DoctrinesPage;
