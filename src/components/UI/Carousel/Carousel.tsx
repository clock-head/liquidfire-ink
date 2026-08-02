import { type CSSProperties, useEffect, useRef, useState } from 'react';
import './Carousel.css';
import Assembly from '../../Modular/Assembly';
import CarouselItem from './CarouselItem';
import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';

interface CarouselProps {
  axis?: 'x' | 'y';
  content: CarouselContent[];
  scaleDirection?: 'toward-center' | 'away-from-center';
  maxItems?: number;
  handleExit?: () => void;
}

export interface CarouselContent {
  id?: string;
  slug?: string;
  image?: string;
  title?: string;
  alt?: string;
  description?: string;
  name?: string;
}

export default function Carousel({
  axis = 'x',
  content,
  scaleDirection = 'toward-center',
  maxItems = 5,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverLockRef = useRef(false);
  const hoverLockTimeoutRef = useRef<number | null>(null);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    return () => {
      if (hoverLockTimeoutRef.current !== null) {
        window.clearTimeout(hoverLockTimeoutRef.current);
      }
    };
  }, []);

  const changeIndex = (index: number) => {
    if (hoverLockRef.current || index === currentIndex) {
      return;
    }

    setCurrentIndex(index);
    hoverLockRef.current = true;

    if (hoverLockTimeoutRef.current !== null) {
      window.clearTimeout(hoverLockTimeoutRef.current);
    }

    hoverLockTimeoutRef.current = window.setTimeout(() => {
      hoverLockRef.current = false;
      hoverLockTimeoutRef.current = null;
    }, 350);
  };

  const normalizedMaxItems = Number.isFinite(maxItems)
    ? Math.max(3, Math.floor(maxItems))
    : 5;
  const visibleItemCount = Math.min(content.length, normalizedMaxItems);
  const centerIndex = Math.floor(visibleItemCount / 2);

  const getCenteredContent = () => {
    if (content.length === 0) {
      return [];
    }

    return Array.from({ length: visibleItemCount }, (_, renderIndex) => {
      const sourceIndex =
        (currentIndex + renderIndex - centerIndex + content.length) %
        content.length;

      return {
        item: content[sourceIndex],
        sourceIndex,
        renderIndex,
      };
    });
  };

  const getDistanceProgress = (renderIndex: number) => {
    const distance = Math.abs(renderIndex - centerIndex);
    const maxDistance = Math.max(
      centerIndex,
      visibleItemCount - 1 - centerIndex,
    );

    return maxDistance === 0 ? 0 : distance / maxDistance;
  };

  const getScaleForRenderIndex = (renderIndex: number) => {
    const progress = getDistanceProgress(renderIndex);
    const minScale = 0.72;
    const maxScale = 1.2;

    return scaleDirection === 'away-from-center'
      ? minScale + progress * (maxScale - minScale)
      : maxScale - progress * (maxScale - minScale);
  };

  const getItemState = (renderIndex: number) => {
    const distance = Math.abs(renderIndex - centerIndex); // this tells me that the renderIndex is the centerIndex.

    if (distance === 0) {
      return 'current';
    }

    if (distance === 1) {
      return 'near';
    }

    return 'distant';
  };

  return (
    <Assembly
      layout="flex"
      alignItems="center"
      justifyContent="center"
      gap="lg"
      flexDirection={axis === 'x' ? 'row' : 'column'}
      position="relative"
    >
      <Button
        width="3"
        position="absolute"
        positionRight="1"
        positionTop="1"
        className="exit-btn"
        onClick={handleClick}
      >
        back
      </Button>
      {getCenteredContent().map(({ item, sourceIndex, renderIndex }) => {
        const scale = getScaleForRenderIndex(renderIndex);
        const blur = getDistanceProgress(renderIndex) * 4;
        const itemState = getItemState(renderIndex);
        const style = {
          '--unit-scale': scale,
          '--unit-blur': `${blur}px`,
        } as CSSProperties;

        return (
          <CarouselItem
            key={item.id ?? item.title}
            itemState={itemState}
            onHover={() => changeIndex(sourceIndex)}
            onFocus={() => changeIndex(sourceIndex)}
            style={style}
            name={item.name}
            description={item.description}
            imgSrc={item.image}
            imgAlt={item.alt ?? item.title}
          />
        );
      })}
    </Assembly>
  );
}
