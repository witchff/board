import React, { useState } from 'react';
import styles from './App.module.scss';
import Select from 'shared/UI/select';

export type IOptions = {
  id: number;
  name: string;
  value: string;
};

const data: IOptions[] = [
  {
    id: 1,
    name: 'Москва',
    value: 'Москва',
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
    value: 'Санкт-Петербург',
  },
  {
    id: 3,
    name: 'Краснодар',
    value: 'Краснодар',
  },
  {
    id: 4,
    name: 'Сочи',
    value: 'Сочи',
  },
  {
    id: 5,
    name: 'Тверь',
    value: 'Тверь',
  },
  {
    id: 6,
    name: 'Нижний Новгород',
    value: 'Нижний Новгород',
  },
  {
    id: 7,
    name: 'Казань',
    value: 'Казань',
  },
  {
    id: 8,
    name: 'Смоленск',
    value: 'Смоленск',
  },
  {
    id: 9,
    name: 'Тверь',
    value: 'Тверь',
  },
  {
    id: 10,
    name: 'Оренбург',
    value: 'Оренбург',
  },
  {
    id: 11,
    name: 'Самара',
    value: 'Самара',
  },
  {
    id: 12,
    name: 'Тольятти',
    value: 'Тольятти',
  },
];

function App() {
  const [selected, setSelected] = useState<
    string | null
  >('Москва');
  return (
    <div className={styles.app}>
      <Select
        title='Ваш город:'
        options={data}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
