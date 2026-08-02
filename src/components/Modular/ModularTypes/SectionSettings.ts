export type Layout = 'flex' | 'grid' | '';
type FlexDirection = 'row' | 'column' | '';
type GridTemplate =
  | 'standard-3'
  | 'standard-2-3'
  | 'vertical-2'
  | 'vertical-3'
  | 'horizontal-2'
  | 'horizontal-3'
  | 'horizontal-33-66'
  | 'horizontal-66-33'
  | '';
type Gap = 'xsm' | 'sm' | 'md' | 'lg' | '';
export type As = 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';

export interface SectionTokenClasses {
  layout?: Layout;
  overLay?: string;

  flex?: '1' | '2' | '3' | '4' | '5' | '';
  flexDirection?: FlexDirection;
  flexWrap?: string;

  width?: string;
  height?: string;

  paddingLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  marginLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  gridTemplate?: GridTemplate;
  gridArea?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

  className?: string;
  colSpan?: string;
  rowSpan?: string;

  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  justifySelf?: string;
  alignSelf?: string;

  gap?: Gap;
  background?: string;

  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;

  boxShadow?: string;
  zIndex?: string;
}

export interface SectionSettings extends SectionTokenClasses {
  children: React.ReactNode;
}
