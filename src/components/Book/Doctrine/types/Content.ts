export type ContentType = 'doctrine' | 'codex' | 'protocol';
import type { ContentBlock } from './Blocks';

export interface ContentDocument {
  id: string;
  slug: string;
  type: ContentType;

  title: string;
  summary?: string;

  status: 'draft' | 'published' | 'archived';
  visibility: 'public' | 'private' | 'unlisted';

  blocks: ContentBlock[];
}
