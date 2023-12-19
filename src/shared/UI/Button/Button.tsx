import React, {
  ComponentProps,
  ElementType,
} from 'react';
import styles from './Button.module.scss';

type ButtonOwnProps<
  A extends ElementType = ElementType,
> = {
  children: React.ReactNode;
  variant: 'fill' | 'outline';
  backColor: 'red' | 'black' | 'gray';
  size: 'full' | 'small' | 'medium' | 'large';
  active?: boolean;
  as?: A;
};

type ButtonProps<A extends ElementType> =
  ButtonOwnProps<A> &
    Omit<ComponentProps<A>, keyof ButtonOwnProps>;

const defaultElement = 'button';

function Button<
  A extends ElementType = typeof defaultElement,
>({
  children,
  variant,
  backColor,
  size,
  active,
  as,
  ...otherProps
}: ButtonProps<A>): JSX.Element {
  const classes = [
    styles.button,
    styles[variant],
    styles[backColor],
    styles[size],
    active ? styles.active : '',
  ];

  const TagName = as || defaultElement;

  return (
    <TagName
      className={classes.join(' ')}
      {...otherProps}
    >
      {children}
    </TagName>
  );
}

export default Button;
