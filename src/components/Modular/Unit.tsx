import type { ElementType } from 'react';
import { useLayout } from '../../hooks/useLayout';
import { UnitClassBuilder } from './builders/UnitClassBuilder';
import type { UnitSettings, As } from './ModularTypes/UnitSettings';
import type { UnitTokenClasses } from './ModularTypes/UnitSettings';
import { unitTokenKeys } from './ModularTypes/UnitTokenKeys';
import './Unit.css';

const Unit = <T extends As = 'div'>(props: UnitSettings<T>) => {
  const { context } = useLayout();
  const className = UnitClassBuilder.build(props, context?.unit || {});
  const { children, as } = props;
  const elementProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        key !== 'children' &&
        key !== 'as' &&
        !unitTokenKeys.has(key as keyof UnitTokenClasses),
    ),
  );

  const Component = (as ?? 'div') as ElementType;

  return (
    <Component {...elementProps} className={`${className}`}>
      {children}
    </Component>
  );
};

export default Unit;
