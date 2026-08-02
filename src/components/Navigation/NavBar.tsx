import { NavLink } from 'react-router-dom';
import Assembly from '../Modular/Assembly';
import MicroUnit from '../Modular/MicroUnit';
import Unit from '../Modular/Unit';
import './NavBar.css';
import Button from '../UI/Button/Button';

interface NavBarItem {
  label: string;
  to: string;
}

interface NavBarProps {
  items?: NavBarItem[];
  handleExit?: () => void;
}

const defaultItems: NavBarItem[] = [
  { label: 'Art', to: '/art' },
  { label: 'Doctrines', to: '/doctrines' },
  { label: 'Shop', to: '/shop' },
];

export default function NavBar({
  items = defaultItems,
  handleExit,
}: NavBarProps) {
  return (
    <Assembly
      as="nav"
      className="nav-bar"
      layout="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="lg"
      position="relative"
      aria-label="Primary navigation"
      height="3"
    >
      {items.map((item) => (
        <Unit
          key={item.to}
          as={NavLink}
          to={item.to}
          className="nav-bar__link"
          widthMax="200"
          interactive="focus-ring"
        >
          <MicroUnit as="p" pTypography="button" pColor="light">
            {item.label}
          </MicroUnit>
        </Unit>
      ))}

      <Button
        width="3"
        onClick={handleExit}
        position="absolute"
        positionRight="1"
        positionBottom="5"
        variant="outlinelight"
      >
        x
      </Button>
    </Assembly>
  );
}
