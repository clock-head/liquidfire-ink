import { useState } from 'react';
import Unit from '../Modular/Unit';
import MicroUnit from '../Modular/MicroUnit';
import CodexList from './CodexList';

interface DoctrineProps {
  id: string;
  slug: string;
  title: string;
  description: string;
}

const Doctrine = ({ id, slug, title, description }: DoctrineProps) => {
  const [isCodexListVisible, setIsCodexListVisible] = useState(false);

  return (
    <Unit
      layout="flex"
      flexDirection="column"
      width="5"
      height="4"
      paddingRight="md"
      paddingLeft="md"
      paddingTop="md"
      paddingBottom="md"
      background="light"
      borderRadius="md"
      onMouseEnter={() => setIsCodexListVisible(true)}
      onMouseLeave={() => setIsCodexListVisible(false)}
      onFocus={() => setIsCodexListVisible(true)}
      onBlur={() => setIsCodexListVisible(false)}
      className="doctrine"
    >
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        {title}
      </MicroUnit>
      <MicroUnit as="p" pTypography="caption" pColor="light">
        {description}
      </MicroUnit>
      {isCodexListVisible && <CodexList doctrineId={id} doctrineSlug={slug} />}
    </Unit>
  );
};

export default Doctrine;
