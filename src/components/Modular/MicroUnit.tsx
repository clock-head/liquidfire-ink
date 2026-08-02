import React from 'react';
import { useLayout } from './contexts/layout/LayoutContext';
import { MicroUnitClassBuilder } from './builders/MicroUnitClassBuilder';
import type { MicroUnitSettings, As } from './ModularTypes/MicroUnitSettings';
import './MicroUnit.css';

const MicroUnit = <T extends As>(props: MicroUnitSettings<T>) => {
  const { context } = useLayout();
  const { children, as } = props;
  const className = MicroUnitClassBuilder.build(
    props,
    context?.microUnit || {},
  );
  const Component = (as ?? 'p') as React.ElementType;

  if (as === 'img') {
    const { srcLink, alt } = props as MicroUnitSettings<'img'>;

    return <img className={`${className}`} src={srcLink} alt={alt ?? ''} />;
  }

  return <Component className={`${className}`}>{children}</Component>;
};

export default MicroUnit;
