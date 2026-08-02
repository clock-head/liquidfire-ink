import { books } from './_data/content';
import { useNavigate } from 'react-router-dom';
import { useEnteredState } from '../../hooks/useEnteredState';
import type { book } from './_data/content';
import Assembly from '../Modular/Assembly';
import Button from '../UI/Button/Button';

import Book from './Book';

const BookList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setEnteredState(true);
  };

  return books.map((book: book) => {
    return (
      <Assembly key={book.id} position="relative">
        <Button
          variant="outlinelight"
          width="3"
          position="absolute"
          positionRight="0"
          onClick={handleClick}
        >
          back
        </Button>
        <Book
          title={book.title}
          description={book.description}
          slug={book.slug}
        />
      </Assembly>
    );
  });
};

export default BookList;
