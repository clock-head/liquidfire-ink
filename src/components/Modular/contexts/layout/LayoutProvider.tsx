import React from 'react';
import type { ReactNode } from 'react';
import { LayoutContext } from './LayoutContext';
import type { LayoutContextProps } from './LayoutContext';

interface LayoutProviderProps extends LayoutContextProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,

  context = {},
}) => {
  return (
    <LayoutContext.Provider value={{ context }}>
      {children}
    </LayoutContext.Provider>
  );
};
