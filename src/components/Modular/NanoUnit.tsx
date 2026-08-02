import type { ElementType } from 'react';
import { useLayout } from './contexts/layout/LayoutContext';
import { NanoUnitClassBuilder } from './builders/NanoUnitClassBuilder';
import type { NanoUnitSettings, As } from './ModularTypes/NanoUnitSettings';
import './NanoUnit.css';

const NanoUnit = <T extends As>(props: NanoUnitSettings<T>) => {
  const { context } = useLayout();
  const { children, as } = props;
  const className = NanoUnitClassBuilder.build(props, context?.nanoUnit || {});
  const Component = (as ?? 'span') as ElementType;

  return (
    <Component as={as} className={`${className}`}>
      {children}
    </Component>
  );
};

export default NanoUnit;
