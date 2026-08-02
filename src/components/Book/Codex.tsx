import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import MicroUnit from '../Modular/MicroUnit';
import { useParams } from '../../hooks/useParams';

interface Codex {
  doctrineSlug: string;
  slug: string;
  title: string;
}

const Codex = ({ doctrineSlug, slug, title }: Codex) => {
  const navigate = useNavigate();
  const { bookSlug } = useParams();

  const handleClick = () => {
    if (!bookSlug) {
      return;
    }

    navigate(`/doctrines/${bookSlug}/${doctrineSlug}/${slug}`);
  };

  return (
    <Button
      variant="outlinelight"
      width="6"
      paddingLeft="lg"
      paddingRight="lg"
      onClick={handleClick}
    >
      <MicroUnit as="label" pTypography="body-small">
        {' '}
        {title}{' '}
      </MicroUnit>
    </Button>
  );
};

export default Codex;
