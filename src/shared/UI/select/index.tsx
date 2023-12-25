import React, {
  SetStateAction,
  useState,
} from 'react';
import styles from './Select.module.scss';
import SelectBox from './SelectBox';
import Options from './Options';
import Option from './Option';
import { IOptions } from 'client/App';

type SelectProps = {
  title: string;
  options: IOptions[];
  selected: string | null;
  setSelected: React.Dispatch<
    SetStateAction<string | null>
  >;
};

function Select({
  title,
  options,
  selected = 'Москва',
  setSelected,
}: SelectProps): JSX.Element {
  const [open, setOpen] =
    useState<boolean>(false);

  return (
    <div className={styles.select}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.wrapper}>
        <SelectBox
          defOption={selected}
          open={open}
          setOpen={setOpen}
        />
        <Options open={open}>
          {options.map((item) => (
            <Option
              key={item.id}
              item={item}
              active={selected === item.value}
              setSelected={setSelected}
              setOpen={setOpen}
            />
          ))}
        </Options>
      </div>
    </div>
  );
}

export default Select;
