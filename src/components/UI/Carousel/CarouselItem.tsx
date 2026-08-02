import type { CSSProperties } from 'react';
import Unit from '../../Modular/Unit';
import MicroUnit from '../../Modular/MicroUnit';
import './CarouselItem.css';

interface CarouselItemProps {
  itemState?: 'current' | 'near' | 'distant';
  onHover?: () => void;
  onFocus?: () => void;
  style?: CSSProperties;
  title?: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
  name?: string;
}

export default function CarouselItem({
  itemState = 'distant',
  onHover,
  onFocus,
  style,
  title,
  description,
  name,
  imgSrc,
  imgAlt,
}: CarouselItemProps) {
  const opacity = itemState === 'current' ? 'full' : itemState;

  return (
    <Unit
      widthMax="300"
      motion="scale-blur"
      opacity={opacity === 'distant' ? 'muted' : opacity}
      zIndex={itemState === 'current' ? '10' : undefined}
      interactive="focus-ring"
      onMouseEnter={onHover}
      onFocus={onFocus}
      style={style}
      tabIndex={0}
    >
      <MicroUnit srcLink={imgSrc} alt={imgAlt ?? title} as="img" />

      {name && (
        <MicroUnit
          className="carousel__item-title"
          as="h2"
          h2Typography="subtitle"
          h2Color="text-primary"
          paddingTop="sm"
        >
          {name}
        </MicroUnit>
      )}
      {description && (
        <MicroUnit
          as="p"
          pTypography="caption"
          pColor="light"
          paddingTop="sm"
          paddingRight="lg"
        >
          {description}
        </MicroUnit>
      )}
    </Unit>
  );
}
