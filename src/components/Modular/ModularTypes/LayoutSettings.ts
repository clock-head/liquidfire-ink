type Layout = 'flex' | 'grid' | '';
type FlexDirection = 'row' | 'column' | '';
type GridTemplate =
  | 'standard-3'
  | 'standard-2-3'
  | 'horizontal-2'
  | 'horizontal-3'
  | 'horizontal-2-1'
  | 'vertical-2'
  | 'vertical-3'
  | '';

export interface LayoutTokenClasses {
  layout?: Layout;
  flexDirection?: FlexDirection;

  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  gridTemplate?: GridTemplate;

  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  background?: string;
  variant?: string;
  minHeight?: '100vh';
}
