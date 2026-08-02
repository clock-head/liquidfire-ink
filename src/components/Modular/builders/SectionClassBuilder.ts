import type { SectionTokenClasses } from '../ModularTypes/SectionSettings';

type ClassValue = string | undefined | null;

interface SectionProps extends SectionTokenClasses {
  className?: string;
}

export class SectionClassBuilder {
  static build(props: SectionProps, context: SectionTokenClasses): string {
    const get = (prop: keyof SectionProps): string | undefined =>
      props[prop] || context[prop];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'section',
      props.className ?? context.className,
      get('layout'),

      toClass('flex', get('flex')),
      toClass('flex-direction', get('flexDirection')),
      get('flexWrap'),

      toClass('width', get('width')),
      toClass('height', get('height')),
      toClass('bg', get('background')),

      toClass('col-span', get('colSpan')),
      toClass('row-span', get('rowSpan')),

      toClass('grid-template', get('gridTemplate')),
      toClass('grid-area', get('gridArea')),

      toClass('align-self', get('alignSelf')),
      toClass('justify-self', get('justifySelf')),
      toClass('justify-content', get('justifyContent')),
      toClass('justify-items', get('justifyItems')),
      toClass('align-content', get('alignContent')),
      toClass('align-items', get('alignItems')),

      toClass('padding-left', get('paddingLeft')),
      toClass('padding-right', get('paddingRight')),
      toClass('padding-top', get('paddingTop')),
      toClass('padding-bottom', get('paddingBottom')),

      toClass('margin-left', get('marginLeft')),
      toClass('margin-right', get('marginRight')),
      toClass('margin-top', get('marginTop')),
      toClass('margin-bottom', get('marginBottom')),

      toClass('gap', get('gap')),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
