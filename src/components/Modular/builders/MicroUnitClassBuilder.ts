import type { MicroUnitClassTokens } from '../ModularTypes/MicroUnitSettings';

type ClassValue = string | undefined | null;

export class MicroUnitClassBuilder {
  static build(
    props: MicroUnitClassTokens,
    context: MicroUnitClassTokens = {},
  ): string {
    const get = (prop: keyof MicroUnitClassTokens): string | undefined =>
      props[prop] || context[prop];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'microunit',
      props.className ?? context.className,

      get('overLay'),
      toClass('spacing', get('spacing')),
      toClass('align-self', get('alignSelf')),
      toClass('justify-self', get('justifySelf')),
      toClass('text', get('textAlign')),

      toClass('padding-left', get('paddingLeft')),
      toClass('padding-right', get('paddingRight')),
      toClass('padding-top', get('paddingTop')),
      toClass('padding-bottom', get('paddingBottom')),

      toClass('margin-left', get('marginLeft')),
      toClass('margin-right', get('marginRight')),
      toClass('margin-top', get('marginTop')),
      toClass('margin-bottom', get('marginBottom')),

      toClass('h1-typography', get('h1Typography')),
      toClass('h2-typography', get('h2Typography')),
      toClass('p-typography', get('pTypography')),
      toClass('label-typography', get('labelTypography')),
      toClass('h1-color', get('h1Color')),
      toClass('h2-color', get('h2Color')),
      toClass('p-color', get('pColor')),
      toClass('label-color', get('labelColor')),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
