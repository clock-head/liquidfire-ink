import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type {
  h1Typography,
  h2Typography,
  pTypography,
  labelTypography,
  h1Color,
  h2Color,
  pColor,
  labelColor,
} from './fonts';

export type As = 'h1' | 'h2' | 'p' | 'label' | 'img';

type OverLay = 'overlay' | 'underlay' | '';
type ColSpan =
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
type RowSpan =
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

type JustifySelf = 'left' | 'center' | 'right' | 'stretch' | '';
type AlignSelf =
  | 'top'
  | 'center'
  | 'bottom'
  | 'stretch'
  | 'flex-top'
  | 'flex-bottom'
  | '';
type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type TextAlign = 'center' | '';

export interface MicroUnitTokenClasses {
  className?: string;

  overLay?: OverLay;

  colSpan?: ColSpan;
  rowSpan?: RowSpan;

  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  textAlign?: TextAlign;

  spacing?: Spacing;

  flexBasis?: string;

  paddingLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  marginLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  background?: string;
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

  // gridTemplate?: string;
  gridArea?: string;

  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;

  boxShadow?: string;
  zIndex?: string;
}

export interface MicroUnitSemanticTokenClasses {
  h1Typography?: h1Typography;
  h2Typography?: h2Typography;
  pTypography?: pTypography;
  labelTypography?: labelTypography;
  h1Color?: h1Color;
  h2Color?: h2Color;
  pColor?: pColor;
  labelColor?: labelColor;
}

export type MicroUnitClassTokens = MicroUnitTokenClasses &
  MicroUnitSemanticTokenClasses;

type VariantProps<T extends As> = T extends 'h1'
  ? { h1Typography?: h1Typography; h1Color?: h1Color; as: 'h1' }
  : T extends 'h2'
    ? { h2Typography?: h2Typography; h2Color?: h2Color; as: 'h2' }
    : T extends 'p'
      ? { pTypography?: pTypography; pColor?: pColor; as: 'p' }
      : T extends 'label'
        ? {
            labelTypography?: labelTypography;
            labelColor?: labelColor;
            as: 'label';
          }
        : T extends 'img'
          ? { as: 'img'; srcLink?: string; alt?: string; children?: never }
        : Record<string, never>;

export type MicroUnitSettings<T extends As = 'p'> = MicroUnitClassTokens &
  VariantProps<T> & {
    as: T;
    children?: ReactNode;
  } & Omit<
    ComponentPropsWithoutRef<T>,
    keyof MicroUnitClassTokens | 'as' | 'children' | 'src'
  >;
