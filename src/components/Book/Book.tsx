import { NavLink } from 'react-router-dom';
import Unit from '../Modular/Unit';
import MicroUnit from '../Modular/MicroUnit';
import './Book.css';

interface BookProps {
  title: string;
  description: string;
  slug: string;
}

const Book = ({ title, description, slug }: BookProps) => {
  return (
    <Unit
      as={NavLink}
      to={`/doctrines/${slug}`}
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
      className="book"
    >
      <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
        {title}
      </MicroUnit>
      <MicroUnit as="p" pTypography="caption" pColor="light">
        {description}
      </MicroUnit>
    </Unit>
  );
};

export default Book;
