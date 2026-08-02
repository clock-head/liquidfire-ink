import type { NanoUnitTokenClasses } from '../ModularTypes/NanoUnitSettings';

type ClassValue = string | undefined | null;

export class NanoUnitClassBuilder {
  static build(
    props: NanoUnitTokenClasses,
    context: NanoUnitTokenClasses = {},
  ): string {
    const get = (prop: keyof NanoUnitTokenClasses): string | undefined =>
      props[prop] || context[prop];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'nanounit',
      props.className ?? context.className,
      toClass('nanoUnitTypography', get('typography')),
    ]
      .filter(this.isValid)
      .join(' ');
  }
  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
