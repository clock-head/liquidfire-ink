import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
type Layout = 'flex' | '';
type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
type Motion = 'scale-blur' | '';
type Opacity = 'muted' | 'near' | 'full' | '';
type Interactive = 'focus-ring' | '';

export type As = ElementType;

export interface UnitTokenClasses {
  className?: string;
  layout?: Layout;
  flex?: '1' | '2' | '3' | '';
  gap?: string;
  gridTemplate?: string;
  gridArea?: string;

  background?: string;
  boxShadow?: string;
  motion?: Motion;
  opacity?: Opacity;
  interactive?: Interactive;

  borderLight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  borderDark?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  borderColor?: string;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  flexDirection?: 'row' | 'column' | '';
  flexGrow?: '1' | '2' | '3' | '4' | '';
  flexShrink?: '1' | '2' | '3' | '';

  flexWrap?: string;
  flexBasis?: string;

  position?: Position;
  positionTop?: '0' | '1' | '2' | '3';
  positionBottom?: '0' | '1' | '2' | '3' | '4' | '5';
  positionLeft?: '0' | '1' | '2' | '3';
  positionRight?: '0' | '1' | '2' | '3';

  overLay?: string;

  colSpan?: string;
  rowSpan?: string;

  justifyContent?:
    | 'flex-left'
    | 'center'
    | 'flex-right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | '';
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

  zIndex?: string;
}

export type UnitSettings<T extends As = 'div'> = UnitTokenClasses & {
  children?: ReactNode;
  as?: T;
} & Omit<
    ComponentPropsWithoutRef<T>,
    keyof UnitTokenClasses | 'as' | 'children'
  >;
