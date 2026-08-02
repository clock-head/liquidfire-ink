import type { ElementType } from 'react';
import { useLayout } from './contexts/layout/LayoutContext';
import { AssemblyClassBuilder } from './builders/AssemblyClassBuilder';
import type { AssemblySettings, As } from './ModularTypes/AssemblySettings';
import type { AssemblyTokenClasses } from './ModularTypes/AssemblySettings';
import { assemblyTokenKeys } from './ModularTypes/AssemblyTokenKeys';
import './Assembly.css';

const Assembly = <T extends As>(props: AssemblySettings<T>) => {
  const { context } = useLayout();
  const className = AssemblyClassBuilder.build(props, context?.assembly || {});
  const { children, as } = props;
  const elementProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        key !== 'children' &&
        key !== 'as' &&
        !assemblyTokenKeys.has(key as keyof AssemblyTokenClasses),
    ),
  );

  const Component = (as ?? 'div') as ElementType;

  return (
    <Component {...elementProps} className={`${className}`}>
      {children}
    </Component>
  );
};

export default Assembly;
