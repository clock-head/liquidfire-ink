import type { UnitTokenClasses } from '../ModularTypes/UnitSettings';

type ClassValue = string | undefined | null;

interface UnitProps extends UnitTokenClasses {
  className?: string;
}

export class UnitClassBuilder {
  static build(props: UnitProps, context: UnitTokenClasses = {}): string {
    const get = <T extends keyof UnitTokenClasses>(
      key: T,
    ): string | undefined => props[key] || context[key];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'unit',
      props.className ?? context.className,
      get('layout'),
      toClass('flex', get('flex')),

      toClass('grid-template', get('gridTemplate')),
      toClass('grid-area', get('gridArea')),

      get('overLay'),
      toClass('col-span', get('colSpan')),
      toClass('row-span', get('rowSpan')),

      toClass('gap', get('gap')),
      toClass('width', get('width')),
      toClass('width-min', get('widthMin')),
      toClass('width-max', get('widthMax')),
      toClass('height', get('height')),
      toClass('height-min', get('heightMin')),
      toClass('height-max', get('heightMax')),

      toClass('motion', get('motion')),
      toClass('opacity', get('opacity')),
      toClass('interactive', get('interactive')),
      toClass('position', get('position')),
      toClass('position-top', get('positionTop')),
      toClass('position-bottom', get('positionBottom')),
      toClass('position-left', get('positionLeft')),
      toClass('position-right', get('positionRight')),

      toClass('justify-content', get('justifyContent')),
      toClass('justify-items', get('justifyItems')),
      toClass('align-content', get('alignContent')),
      toClass('align-items', get('alignItems')),
      toClass('align-self', get('alignSelf')),
      toClass('justify-self', get('justifySelf')),
      toClass('padding-left', get('paddingLeft')),
      toClass('padding-right', get('paddingRight')),
      toClass('padding-top', get('paddingTop')),
      toClass('padding-bottom', get('paddingBottom')),
      toClass('margin', get('margin')),
      toClass('margin-left', get('marginLeft')),
      toClass('margin-right', get('marginRight')),
      toClass('margin-top', get('marginTop')),
      toClass('margin-bottom', get('marginBottom')),

      toClass('box-shadow', get('boxShadow')),
      toClass('z-index', get('zIndex')),
      toClass('bg', get('background')),
      toClass('border-radius', get('borderRadius')),

      toClass('flex', get('flex')),
      toClass('flex-direction', get('flexDirection')),
      toClass('flex-wrap', get('flexWrap')),
      toClass('flex-basis', get('flexBasis')),
      toClass('flex-shrink', get('flexShrink')),
      toClass('flex-grow', get('flexGrow')),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
