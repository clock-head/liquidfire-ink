export type ContentBlock = CodeBlock;

interface BaseBlock {
  id: string;
  position: number;
}

interface CodeBlock extends BaseBlock {
  id: string;
  type: 'code';
  language?: string;
  code: string;
}
