import type { ComponentPropsWithoutRef } from 'react';

export type As = 'span' | 'a' | 'time';

export interface NanoUnitTokenClasses {
  className?: string;
  typography?: string;
}

type VariantProps<T extends As> = T extends 'span'
  ? { as: 'span' }
  : T extends 'a'
    ? { as: 'a' }
    : T extends 'time'
      ? { as: 'time' }
      : Record<string, never>;

export type NanoUnitSettings<T extends As = 'span'> = NanoUnitTokenClasses &
  VariantProps<T> & {
    children?: React.ReactNode;
    as?: T;
  } & Omit<
    ComponentPropsWithoutRef<T>,
    keyof NanoUnitTokenClasses | 'as' | 'children'
  >;
