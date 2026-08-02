import type { AssemblyTokenClasses } from '../ModularTypes/AssemblySettings';

type ClassValue = string | undefined | null;

export class AssemblyClassBuilder {
  static build(
    props: AssemblyTokenClasses,
    context: Partial<AssemblyTokenClasses> = {},
  ): string {
    const get = <T extends keyof AssemblyTokenClasses>(
      key: T,
    ): string | undefined => props[key] || context[key];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'assembly',
      props.className ?? context.className,
      get('layout'),

      toClass('bg', get('background')),

      toClass('grid-template', get('gridTemplate')),
      toClass('flex-direction', get('flexDirection')),

      toClass('position', get('position')),
      toClass('z-index', get('zIndex')),

      toClass('col-span', get('colSpan')),
      toClass('row-span', get('rowSpan')),

      toClass('gap', get('gap')),
      toClass('width', get('width')),
      toClass('width-min', get('widthMin')),
      toClass('width-max', get('widthMax')),
      toClass('height', get('height')),
      toClass('height-min', get('heightMin')),
      toClass('height-max', get('heightMax')),

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

      toClass('border-color', get('borderColor')),
      toClass('border-dark', get('borderDark')),
      toClass('border-light', get('borderLight')),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
