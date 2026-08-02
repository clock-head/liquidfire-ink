import type { BlockId, GraphEdge } from './Blocks';

type CodexId = string;

export interface Codex {
  id: CodexId;
  content: BlockId[];
  graphEdges: GraphEdge[];
  metadata?: CodexMetadata;
}

interface CodexMetadata {
  parentDoctrineId?: string;
  codexId?: string;

  status: 'draft' | 'canonical' | 'deprecated' | 'archived';
  version: number;
  canonicality: 'canonical' | 'supporting' | 'experimental';

  exclusions?: string[];
  adjacentCodexIds?: string[];
}
