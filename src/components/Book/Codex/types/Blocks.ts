export type BlockId = string;

export interface ContentBlock {
  id: BlockId;
  position: number;

  reasoningKind: ReasoningBlockKind;

  heading?: string;
  body: string;

  metadata?: BlockMetadata;
}

export interface GraphEdge {
  from: BlockId;
  to: BlockId;

  relationship: Relationship;
}

type Relationship =
  | 'next'
  | 'supports'
  | 'depend-on'
  | 'extends'
  | 'contrasts-with'
  | 'transforms-into'
  | 'requires';

interface BlockMetadata {
  id: string;
  reasoningKind: ReasoningBlockKind;
  conceptKind: ConceptKind;
  chunkPriority: ChunkPriority;
  headingPath: string[];
}

export type ReasoningBlockKind =
  | 'definition'
  | 'transformation'
  | 'input-state'
  | 'output-state'
  | 'diagnostics'
  | 'forms'
  | 'classes'
  | 'operations'
  | 'failure-conditions'
  | 'governing-law'
  | 'operational-output';

export type ConceptKind =
  | 'forms'
  | 'class'
  | 'operation'
  | 'failure-mode'
  | 'law';

export type ChunkPriority = 'primary' | 'secondary' | 'tertiary';
