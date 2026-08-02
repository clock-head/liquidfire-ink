type ClassValue = string | undefined | null;
import type { LayoutTokenClasses } from '../ModularTypes/LayoutSettings';

export class LayoutClassBuilder {
  static build(props: LayoutTokenClasses): string {
    const {
      layout,

      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
      background,
      gridTemplate,
      flexDirection,
      gap,
      minHeight,
    } = props;

    return [
      'layout-root',
      layout,

      this.prefixed('bg', background),
      this.prefixed('grid-template', gridTemplate),
      this.prefixed('flex-direction', flexDirection),
      this.prefixed('gap', gap),
      this.prefixed('min-height', minHeight),
      this.prefixed('justify-content', justifyContent),
      this.prefixed('justify-items', justifyItems),
      this.prefixed('align-content', alignContent),
      this.prefixed('align-items', alignItems),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }

  static prefixed(prefix: string, value?: string): string | null {
    return value ? `${prefix}-${value}` : null;
  }
}
