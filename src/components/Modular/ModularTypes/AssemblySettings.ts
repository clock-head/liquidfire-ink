import type { ComponentPropsWithoutRef } from 'react';
type Layout = 'grid' | 'flex' | '';
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type GridTemplate =
  | 'standard-3'
  | 'standard-2-3'
  | 'vertical-3'
  | 'vertical-4'
  | 'horizontal-2'
  | 'horizontal-3'
  | 'tile-4';
type FlexDirection = 'row' | 'column' | '';
type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '';

type GridArea = '1' | '2' | '3' | '4' | '5' | '6';

export type As = 'div' | 'form' | 'nav';

export interface AssemblyTokenClasses {
  className?: string;
  layout?: Layout;
  gap?: Gap;
  gridTemplate?: GridTemplate;
  gridArea?: GridArea;
  flexDirection?: FlexDirection;

  background?: string;
  position?: Position;
  zIndex?: string;

  colSpan?: string;
  rowSpan?: string;

  width?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '100'
    | '';

  widthMin?: '10' | '20' | '30' | '40' | '50' | '60' | '70';
  widthMax?: '70' | '200' | '275' | '300' | '400' | '500';

  height?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '';
  heightMin?: '10' | '20' | '30';
  heightMax?: '200' | '275' | '300' | '400' | '500';

  justifyContent?: 'left' | 'center' | 'right' | 'space-between';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch' | '';
  alignContent?:
    | 'top'
    | 'center'
    | 'bottom'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | '';
  alignItems?:
    | 'top'
    | 'center'
    | 'bottom'
    | 'stretch'
    | 'flex-top'
    | 'flex-bottom'
    | '';
  justifySelf?: 'left' | 'center' | 'right' | 'stretch' | '';
  alignSelf?: string;

  paddingLeft?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingRight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  margin?: 'horizontal-auto' | 'vertical-auto' | '';
  marginLeft?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginRight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  borderRadius?: string;
  borderColor?: string;
  borderDark?: string;
  borderLight?: string;
}

type VariantProps<T extends As> = T extends 'div'
  ? { as?: 'div' }
  : T extends 'form'
    ? { as?: 'form' }
    : T extends 'nav'
      ? { as?: 'nav' }
      : Record<string, never>;

export type AssemblySettings<T extends As = 'div'> = AssemblyTokenClasses &
  VariantProps<T> & { children?: React.ReactNode; as?: T } & Omit<
    ComponentPropsWithoutRef<T>,
    keyof AssemblyTokenClasses | 'as' | 'children'
  >;
