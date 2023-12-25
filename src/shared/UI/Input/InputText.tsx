import React from 'react';
import styles from './Input.module.scss';

type InputTextProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

export function InputText({
  children,
  style,
}: InputTextProps): JSX.Element {
  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
}
