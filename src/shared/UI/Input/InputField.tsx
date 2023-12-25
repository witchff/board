import React from 'react';
import styles from './Input.module.scss';

type InputFieldProps = {
  id: string;
  width?: string;
  children: React.ReactNode;
};

function InputField({
  id,
  width = '100%',
  children,
}: InputFieldProps) {
  return (
    <label
      className={styles.label}
      style={{ width }}
      htmlFor={id}
      tabIndex={0}
    >
      {children}
    </label>
  );
}

export default InputField;
