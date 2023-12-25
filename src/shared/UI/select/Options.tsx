import React from 'react';
import styles from './Select.module.scss';

type OptionsProps = {
  open: boolean;
  children: React.ReactNode;
};

function Options({
  open,
  children,
}: OptionsProps): JSX.Element {
  return (
    <ul
      className={`${styles.list} ${
        open ? styles.open : ''
      }`}
    >
      {children}
    </ul>
  );
}

export default Options;
