import React, { SetStateAction } from 'react';
import styles from './Select.module.scss';
import { IOptions } from 'client/App';

type OptionProps = {
  item: IOptions;
  active?: boolean;
  setSelected: React.Dispatch<
    SetStateAction<string | null>
  >;
  setOpen: React.Dispatch<
    SetStateAction<boolean>
  >;
};

function Option({
  item,
  active,
  setSelected,
  setOpen,
}: OptionProps): JSX.Element {
  const getSelected = (
    event: React.MouseEvent<HTMLLIElement>,
  ): void => {
    // Получаем выбранный элемент
    setSelected(
      event.currentTarget.getAttribute(
        'data-query',
      ),
    );
    // Закрываем select
    setOpen(false);
  };

  console.log(active);

  return (
    <li
      data-query={item.value}
      className={`${styles.item} ${
        active ? styles.active : ''
      }`}
      onClick={(
        event: React.MouseEvent<HTMLLIElement>,
      ) => getSelected(event)}
    >
      {item.name}
    </li>
  );
}

export default Option;
