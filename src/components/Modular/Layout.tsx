import React from 'react';
import { LayoutProvider } from './contexts/layout/LayoutProvider';
import type { LayoutContextSettings } from './contexts/layout/LayoutContext';
import type { LayoutTokenClasses } from './ModularTypes/LayoutSettings';

import { LayoutClassBuilder } from './builders/LayoutClassBuilder';
import './Layout.css';

interface LayoutProps extends LayoutTokenClasses {
  children: React.ReactNode;
  context: LayoutContextSettings;
}

const Layout: React.FC<LayoutProps> = ({ children, context, ...props }) => {
  const className = LayoutClassBuilder.build(props);
  return (
    <LayoutProvider context={context}>
      <div className={className}>{children}</div>
    </LayoutProvider>
  );
};

export default Layout;
