import { createContext, useContext } from 'react';
import type { MicroUnitClassTokens } from '../../ModularTypes/MicroUnitSettings';
import type { SectionTokenClasses } from '../../ModularTypes/SectionSettings';
import type { UnitTokenClasses } from '../../ModularTypes/UnitSettings';
import type { NanoUnitTokenClasses } from '../../ModularTypes/NanoUnitSettings';
import type { AssemblyTokenClasses } from '../../ModularTypes/AssemblySettings';

export interface LayoutContextSettings {
  section?: SectionTokenClasses;
  assembly?: AssemblyTokenClasses;
  unit?: UnitTokenClasses;
  microUnit?: MicroUnitClassTokens;
  nanoUnit?: NanoUnitTokenClasses;
}

export interface LayoutContextProps {
  context?: LayoutContextSettings;
}

export const LayoutContext = createContext<LayoutContextProps>({
  context: {},
});

export const useLayout = () => useContext(LayoutContext);
