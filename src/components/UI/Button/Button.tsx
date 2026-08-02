import React from 'react';
import Unit from '../../Modular/Unit';
import './Button.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'carousel'
  | 'signup'
  | 'authSecondary'
  | 'outlinelight';

type ButtonIntent = '' | 'submit' | 'cancel' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  intent?: ButtonIntent | string;
  ariaLabel?: string;
  disabled?: boolean;
  tabIndex?: number;
  className?: string;
  width?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
  height?: '1' | '2';
  widthMin?: '40' | '50' | '70';
  heightMin?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
  positionTop?: '0' | '1' | '2' | '3';
  positionBottom?: '0' | '1' | '2' | '3' | '4' | '5';
  positionLeft?: '0' | '1' | '2' | '3';
  positionRight?: '0' | '1' | '2' | '3';
  paddingRight?: 'xs' | 'sm' | 'md' | 'lg';
  paddingLeft?: 'xs' | 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // visual intent
  intent = '', // semantic intent: 'submit' | 'cancel' | 'danger'
  ariaLabel,
  disabled = false,
  tabIndex = 0,
  className = '',
  widthMin,
  width,
  height,
  position,
  positionTop,
  positionBottom,
  positionLeft,
  positionRight,
  paddingRight,
  paddingLeft,
}) => {
  const baseStyles = 'btn-base';
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    outlinelight: 'btn-outlinelight',
    carousel: 'btn-carousel',
    signup: 'btn-signup',
    authSecondary: 'btn-auth-secondary',
  };

  return (
    <Unit
      as="button"
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      tabIndex={tabIndex}
      className={`${baseStyles} ${variantStyles[variant]} intent-${intent} ${className} `.trim()}
      widthMin={widthMin}
      width={width}
      height={height}
      position={position}
      positionTop={positionTop}
      positionBottom={positionBottom}
      positionLeft={positionLeft}
      positionRight={positionRight}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
    >
      {children}
    </Unit>
  );
};

export default Button;
