import { doctrines } from './_data/content.ts';
import type { doctrine } from './_data/content.ts';
import Assembly from '../Modular/Assembly';
import Doctrine from './Doctrine';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

interface DoctrineListProps {
  bookId: string;
}

const DoctrineList = ({ bookId }: DoctrineListProps) => {
  const bookDoctrines = doctrines.filter(
    (doctrine: doctrine) => doctrine.bookId === bookId,
  );

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/doctrines');
  };

  return (
    <>
      <Assembly layout="flex" position="relative" paddingTop="md">
        <Button
          variant="outlinelight"
          position="absolute"
          positionRight="0"
          width="3"
          onClick={handleClick}
        >
          back
        </Button>
        {bookDoctrines.map((doctrine: doctrine) => (
          <Doctrine
            key={doctrine.id}
            id={doctrine.id}
            slug={doctrine.slug}
            title={doctrine.title}
            description={doctrine.description}
          />
        ))}
      </Assembly>
    </>
  );
};

export default DoctrineList;
