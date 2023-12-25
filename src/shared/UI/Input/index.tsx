import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  id: string;
  placeholder: string;
  icon?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

function Input({
  id,
  placeholder,
  icon,
  onChange,
}: InputProps) {
  return (
    <span className={styles.inner}>
      <input
        id={id}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
      {icon}
    </span>
  );
}

export default Input;
