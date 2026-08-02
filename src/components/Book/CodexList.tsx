import Assembly from '../Modular/Assembly';
import Codex from './Codex';

import { codexes } from './_data/content.ts';

interface CodexListProps {
  doctrineId: string;
  doctrineSlug: string;
}

const CodexList = ({ doctrineId, doctrineSlug }: CodexListProps) => {
  const bookCodexes = codexes.filter(
    (codex) => codex.doctrineId === doctrineId,
  );

  return (
    <Assembly layout="flex" flexDirection="column" gap="sm" paddingTop="sm">
      {bookCodexes.map((codex) => (
        <Codex
          key={codex.id}
          doctrineSlug={doctrineSlug}
          slug={codex.slug}
          title={codex.title}
        />
      ))}
    </Assembly>
  );
};

export default CodexList;
