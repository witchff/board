import React from 'react';
import styles from './App.module.scss';
import Button from 'shared/UI/Button/Button';

function App() {
  return (
    <div className={styles.app}>
      <Button
        as='button'
        type='button'
        backColor='red'
        variant='fill'
        size='medium'
      >
        Кнопка
      </Button>
    </div>
  );
}

export default App;
